import assert from 'node:assert/strict'
import test from 'node:test'
import observeBuilds from '../components/shared/scroll-build/observe-builds.ts'

test('scroll builds arrive in small batches, stay accessible, and clean up', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] })
  class Element {
    constructor(id) {
      this.dataset = id ? { build: id } : {}
      this.items = []
      this.listeners = new Map()
      this.isConnected = true
      this.properties = new Map()
      this.style = {
        setProperty: (key, value) => this.properties.set(key, value),
        removeProperty: (key) => this.properties.delete(key),
      }
    }
    querySelectorAll() {
      return this.items
    }
    closest() {
      return this
    }
    addEventListener(name, callback) {
      this.listeners.set(name, callback)
    }
    removeEventListener(name) {
      this.listeners.delete(name)
    }
  }

  class Observer {
    constructor(callback) {
      this.callback = callback
      this.targets = new Set()
    }
    observe(target) {
      this.targets.add(target)
    }
    unobserve(target) {
      this.targets.delete(target)
    }
    disconnect() {
      this.targets.clear()
      this.disconnected = true
    }
  }

  const motion = new Element()
  motion.matches = false
  const root = new Element()
  let groups = [new Element('first')]
  root.querySelectorAll = (selector) => {
    if (selector === '[data-build]') return groups
    if (selector === '[data-build-item]') return groups.flatMap((g) => g.items)
    return groups.filter((g) => !g.dataset.buildState)
  }

  let intersection
  let mutation
  const globals = {
    window: { IntersectionObserver: Observer, matchMedia: () => motion },
    HTMLElement: Element,
    IntersectionObserver: class extends Observer {
      constructor(callback) {
        super(callback)
        intersection = this
      }
    },
    MutationObserver: class extends Observer {
      constructor(callback) {
        super(callback)
        mutation = this
      }
    },
  }
  const previous = Object.fromEntries(
    Object.keys(globals).map((key) => [
      key,
      Object.getOwnPropertyDescriptor(globalThis, key),
    ]),
  )

  try {
    Object.assign(globalThis, globals)
    const cleanup = observeBuilds(root)
    const first = groups[0]
    assert.equal(first.dataset.buildState, 'pending')
    const intersect = (targets, isIntersecting = true, bottom = 200) =>
      intersection.callback(
        targets.map((target) => ({
          target,
          isIntersecting,
          boundingClientRect: { bottom },
        })),
      )
    intersect([first])
    assert.equal(first.dataset.buildState, 'pending')
    t.mock.timers.tick(0)
    assert.equal(first.dataset.buildState, 'revealing')
    assert.equal(intersection.targets.has(first), false)
    root.listeners.get('animationend')({
      target: first,
      animationName: 'build-button-outline',
    })
    assert.equal(first.dataset.buildState, 'revealing')
    root.listeners.get('animationend')({
      target: first,
      animationName: 'build-button-box',
    })
    assert.equal(first.dataset.buildState, 'complete')

    const batch = Array.from(
      { length: 12 },
      (_, i) => new Element(`batch-${i}`),
    )
    groups.push(...batch)
    mutation.callback()
    const scales = batch.map((group) =>
      Number(group.properties.get('--build-scale')),
    )
    assert.ok(scales.some((scale) => scale < 1))
    assert.ok(scales.some((scale) => scale > 1))
    assert.ok(scales.filter((scale) => Math.abs(scale - 1) < 0.05).length >= 6)
    assert.ok(new Set(batch.map((g) => g.properties.get('--build-x'))).size > 1)
    const distances = batch.map((group) =>
      Number(group.properties.get('--build-distance')),
    )
    assert.equal(distances.filter((distance) => distance === 4).length, 3)
    assert.equal(distances.filter((distance) => distance === 1).length, 9)
    intersect(batch)
    t.mock.timers.tick(349)
    assert.ok(batch.every((group) => group.dataset.buildState === 'pending'))
    t.mock.timers.tick(1)
    assert.equal(
      batch.filter((g) => g.dataset.buildState === 'revealing').length,
      5,
    )
    t.mock.timers.tick(350)
    assert.equal(
      batch.filter((g) => g.dataset.buildState === 'revealing').length,
      9,
    )
    intersect([batch[9]], false)
    batch[10].isConnected = false
    t.mock.timers.tick(350)
    assert.equal(batch[9].dataset.buildState, 'pending')
    assert.equal(batch[10].dataset.buildState, 'pending')
    assert.equal(batch[11].dataset.buildState, 'revealing')
    intersect([batch[9]], false, -10)
    assert.equal(batch[9].dataset.buildState, 'complete')

    groups = [new Element('first'), new Element('keyboard')]
    mutation.callback()
    assert.equal(groups[0].dataset.buildState, 'complete')
    assert.equal(groups[1].dataset.buildState, 'pending')
    intersect([groups[1]])
    root.listeners.get('focusin')({ target: groups[1] })
    assert.equal(groups[1].dataset.buildState, 'complete')

    groups.push(new Element('motion'))
    mutation.callback()
    intersect([groups[2]])
    motion.matches = true
    motion.listeners.get('change')()
    assert.ok(groups.every((g) => g.dataset.buildState === 'complete'))
    intersect([groups[2]])
    t.mock.timers.tick(350)
    assert.equal(groups[2].dataset.buildState, 'complete')

    groups.push(new Element('reduced-motion'))
    mutation.callback()
    assert.equal(groups[3].dataset.buildState, 'complete')
    assert.equal(intersection.targets.size, 0)

    cleanup()
    assert.ok(groups.every((g) => !g.dataset.buildState))
    assert.ok(groups.every((g) => g.properties.size === 0))
    assert.ok(intersection.disconnected && mutation.disconnected)
    assert.equal(root.listeners.size + motion.listeners.size, 0)

    delete window.IntersectionObserver
    assert.equal(observeBuilds(root), undefined)
    assert.ok(groups.every((g) => !g.dataset.buildState))
  } finally {
    for (const [key, descriptor] of Object.entries(previous)) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor)
      else delete globalThis[key]
    }
  }
})
