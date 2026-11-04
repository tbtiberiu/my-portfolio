import assert from 'node:assert/strict'
import test from 'node:test'
import observeBuilds from '../components/shared/scroll-build/observe-builds.ts'

test('scroll builds reveal once, stay accessible, and clean up', () => {
  class Element {
    constructor(id) {
      this.dataset = id ? { build: id } : {}
      this.items = []
      this.listeners = new Map()
      this.style = { setProperty() {}, removeProperty() {} }
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
    intersection.callback([{ target: first, isIntersecting: true }])
    assert.equal(first.dataset.buildState, 'revealing')
    assert.equal(intersection.targets.has(first), false)

    groups = [new Element('first'), new Element('keyboard')]
    mutation.callback()
    assert.equal(groups[0].dataset.buildState, 'complete')
    assert.equal(groups[1].dataset.buildState, 'pending')
    root.listeners.get('focusin')({ target: groups[1] })
    assert.equal(groups[1].dataset.buildState, 'complete')

    groups.push(new Element('motion'))
    mutation.callback()
    motion.matches = true
    motion.listeners.get('change')()
    assert.ok(groups.every((g) => g.dataset.buildState === 'complete'))
    intersection.callback([{ target: groups[2], isIntersecting: true }])
    assert.equal(groups[2].dataset.buildState, 'complete')

    groups.push(new Element('reduced-motion'))
    mutation.callback()
    assert.equal(groups[3].dataset.buildState, 'complete')
    assert.equal(intersection.targets.size, 0)

    cleanup()
    assert.ok(groups.every((g) => !g.dataset.buildState))
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
