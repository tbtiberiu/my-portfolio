import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import postcss from 'postcss'

const css = postcss.parse(
  readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8'),
)

test('grid surfaces reveal at their final position and size', () => {
  let surfaces = 0
  css.walkAtRules('keyframes', (animation) => {
    if (animation.params !== 'build-surface') return
    surfaces++
    animation.walkDecls(({ prop }) => {
      assert.ok(
        !['transform', 'translate', 'scale', 'rotate'].includes(prop),
        `grid surfaces must stay in place, found ${prop}`,
      )
    })
  })
  assert.equal(surfaces, 1)
})
