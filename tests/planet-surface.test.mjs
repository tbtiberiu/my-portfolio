import assert from 'node:assert/strict'
import test from 'node:test'
import { Color } from 'three'
import { orbPalette } from '../components/three/orb-palette.js'
import { createPlanetGeometry } from '../components/three/planet-surface.ts'

function colorAt(geometry, x, y, z) {
  const positions = geometry.getAttribute('position')
  let closest = 0
  let distance = Infinity
  for (let i = 0; i < positions.count; i++) {
    const next =
      (positions.getX(i) - x) ** 2 +
      (positions.getY(i) - y) ** 2 +
      (positions.getZ(i) - z) ** 2
    if (next < distance) {
      distance = next
      closest = i
    }
  }
  return new Color()
    .fromBufferAttribute(geometry.getAttribute('color'), closest)
    .getHexString()
}

test('all nine stylized planets have finite, distinct blue vertex colors', () => {
  const signatures = new Set()
  for (const planet of [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
    'pluto',
  ]) {
    const geometry = createPlanetGeometry(planet)
    const colors = geometry.getAttribute('color')
    assert.equal(colors.count, geometry.getAttribute('position').count)
    assert.ok(
      colors.array.every(
        (value) => Number.isFinite(value) && value >= 0 && value <= 1,
      ),
    )
    assert.ok(
      new Set(colors.array).size > 3,
      `${planet} should have surface detail`,
    )
    for (let i = 0; i < colors.count; i++) {
      assert.ok(
        colors.getZ(i) >= colors.getY(i) && colors.getY(i) >= colors.getX(i),
        `${planet} should stay in the blue palette`,
      )
    }
    signatures.add(Array.from(colors.array).join(','))
    geometry.computeBoundingSphere()
    assert.ok(Math.abs(geometry.boundingSphere.radius - 1) < 0.000001)
    geometry.dispose()
  }
  assert.equal(signatures.size, 9)
})

test('Earth has land in Africa, blue in the Atlantic, and pale polar caps', () => {
  const geometry = createPlanetGeometry('earth')
  const reference = createPlanetGeometry('mercury')
  assert.ok(colorAt(geometry, 0, 0, 1) < colorAt(reference, 0, 0, 1))
  const longitude = ((-30 - 20) * Math.PI) / 180
  assert.equal(
    colorAt(geometry, Math.sin(longitude), 0, Math.cos(longitude)),
    colorAt(reference, Math.sin(longitude), 0, Math.cos(longitude)),
  )
  assert.ok(colorAt(geometry, 0, 1, 0) > colorAt(reference, 0, 1, 0))
  geometry.dispose()
  reference.dispose()
})

test('Pluto has a pale heart on its visible face', () => {
  const geometry = createPlanetGeometry('pluto')
  const reference = createPlanetGeometry('uranus')
  const heartZ = Math.sqrt(1 - 0.12 ** 2 * 2)
  assert.ok(
    colorAt(geometry, 0.12, 0.12, heartZ) >
      colorAt(reference, 0.12, 0.12, heartZ),
  )
  const outsideZ = Math.sqrt(1 - 0.7 ** 2)
  assert.ok(
    colorAt(geometry, -0.7, 0, outsideZ) <
      colorAt(reference, -0.7, 0, outsideZ),
  )
  geometry.dispose()
  reference.dispose()
})

test('planet shadows use the moon palette in both themes', () => {
  for (const theme of ['light', 'dark']) {
    const geometry = createPlanetGeometry('mercury', theme)
    assert.equal(
      colorAt(geometry, Math.SQRT1_2, -Math.SQRT1_2, 0),
      orbPalette[theme].shadow.slice(1),
    )
    geometry.dispose()
  }
})

test('Jupiter storm feathers into the surrounding bands without a hard edge', () => {
  const geometry = createPlanetGeometry('jupiter')
  const positions = geometry.getAttribute('position')
  const colors = geometry.getAttribute('color')
  const row = Math.round((Math.acos(-0.28) / Math.PI) * 64)
  const samples = []
  for (let i = row * 129; i < (row + 1) * 129; i++) {
    const x = positions.getX(i)
    if (positions.getZ(i) > 0.6 && x > -0.05 && x < 0.75) {
      samples.push({
        x,
        rgb: new Color()
          .fromBufferAttribute(colors, i)
          .convertLinearToSRGB()
          .toArray(),
      })
    }
  }
  samples.sort((a, b) => a.x - b.x)
  assert.ok(samples.length > 10)
  for (let i = 1; i < samples.length; i++) {
    const jump = Math.max(
      ...samples[i].rgb.map((value, channel) =>
        Math.abs(value - samples[i - 1].rgb[channel]),
      ),
    )
    assert.ok(jump < 0.03, `hard storm edge at x=${samples[i].x}: ${jump}`)
  }
  geometry.dispose()
})
