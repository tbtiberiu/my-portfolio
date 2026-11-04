import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import postcss from 'postcss'

const css = postcss.parse(
  readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8'),
)

test('the wireframe covers the full button bounds', () => {
  const bounds = {}
  css.walkRules('span.build-frame.build-button-frame', (rule) => {
    rule.walkDecls(({ prop, value }) => {
      bounds[prop] = value
    })
  })
  assert.equal(
    parseFloat(bounds.inset),
    0,
    'the frame must not sit inside the content',
  )
  assert.equal(bounds.width, '100%')
  assert.equal(bounds.height, '100%')
})

test('the visible button grows together with its wireframe', () => {
  let growsWithFrame = false
  css.walkRules('[data-build-button][data-build-state="revealing"]', (rule) => {
    rule.walkDecls('animation', ({ value }) => {
      growsWithFrame = value.includes('build-button-box')
    })
  })
  assert.ok(growsWithFrame, 'animate the whole button, not an empty frame')
  css.walkAtRules('keyframes', (animation) => {
    if (animation.params !== 'build-button-box') return
    animation.walkDecls('opacity', ({ value }) => {
      assert.equal(Number(value), 1, 'the button must stay visible as it grows')
    })
  })
})

test('button wireframes use their assigned starting scale and settle at full size', () => {
  const transforms = []
  css.walkAtRules('keyframes', (animation) => {
    if (animation.params !== 'build-button-box') return
    animation.walkDecls('transform', ({ value }) => {
      transforms.push(value)
    })
  })
  assert.ok(transforms[0].includes('scale(var(--build-scale))'))
  assert.equal(transforms.at(-1), 'translate(0) scale(1)')
})

test('revealing a parent does not show queued child wireframes', () => {
  css.walkRules((rule) => {
    if (!rule.selector.includes('[data-build-state="revealing"]')) return
    if (
      !rule.selector.includes('.build-frame') &&
      !rule.selector.includes('.build-button-frame')
    )
      return
    assert.ok(rule.selector.includes('> .build-'), rule.selector)
  })
})

test('button entrances keep the rotating gradient clipped', () => {
  let clipped = false
  css.walkRules('.rotating-border-btn', (rule) => {
    rule.walkDecls('overflow', ({ value }) => {
      clipped = value === 'hidden'
    })
  })
  assert.ok(clipped, 'rotating borders need a clipping container')
  css.walkAtRules('keyframes', (animation) => {
    if (!animation.params.startsWith('build-button-')) return
    animation.walkDecls('overflow', ({ value }) => {
      assert.notEqual(
        value,
        'visible',
        'the oversized rotating gradient must stay clipped',
      )
    })
  })
})
