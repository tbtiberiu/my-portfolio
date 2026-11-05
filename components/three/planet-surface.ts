import { Color, Float32BufferAttribute, SphereGeometry } from 'three'
import { orbPalette } from './orb-palette.js'

export type Planet =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'
  | 'pluto'

const bandFrequencies = { jupiter: 34, saturn: 20, venus: 10, neptune: 14 }

// Simplified continent outlines, in longitude and latitude, keep Earth graphic.
const continents: [number, number][][] = [
  [
    [-168, 65],
    [-130, 72],
    [-105, 62],
    [-60, 52],
    [-82, 25],
    [-97, 16],
    [-118, 32],
    [-135, 55],
  ],
  [
    [-81, 12],
    [-48, -2],
    [-35, -12],
    [-52, -40],
    [-70, -55],
    [-76, -20],
  ],
  [
    [-18, 34],
    [12, 37],
    [35, 30],
    [51, 10],
    [40, -13],
    [20, -35],
    [8, -24],
    [-3, 4],
    [-17, 16],
  ],
  [
    [-11, 36],
    [-8, 58],
    [25, 71],
    [65, 60],
    [115, 72],
    [170, 60],
    [145, 38],
    [122, 20],
    [106, 1],
    [80, 8],
    [70, 26],
    [35, 33],
    [25, 42],
    [10, 36],
  ],
  [
    [112, -12],
    [137, -10],
    [154, -25],
    [145, -39],
    [117, -34],
  ],
  [
    [-53, 60],
    [-28, 70],
    [-40, 83],
    [-65, 77],
  ],
]

function onLand(longitude: number, latitude: number) {
  return continents.some((outline) => {
    let inside = false
    for (let i = 0, j = outline.length - 1; i < outline.length; j = i++) {
      const [xi, yi] = outline[i]
      const [xj, yj] = outline[j]
      if (
        yi > latitude !== yj > latitude &&
        longitude < ((xj - xi) * (latitude - yi)) / (yj - yi) + xi
      ) {
        inside = !inside
      }
    }
    return inside
  })
}

export function createPlanetGeometry(
  planet: Planet,
  theme: keyof typeof orbPalette = 'dark',
) {
  const geometry = new SphereGeometry(1, 128, 64)
  const positions = geometry.getAttribute('position')
  const colors = new Float32Array(positions.count * 3)
  const palette = orbPalette[theme]
  // SVG gradients interpolate in sRGB; convert back to linear for Three's output.
  const highlight = new Color(palette.highlight).convertLinearToSRGB()
  const midtone = new Color(palette.midtone).convertLinearToSRGB()
  const shadow = new Color(palette.shadow).convertLinearToSRGB()
  const color = new Color()

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i)
    const y = positions.getY(i)
    const z = positions.getZ(i)
    const swirl = Math.sin(x * 8 + z * 6 + Math.sin(y * 9))
    // Match the moon's 30% / 25% radial highlight and 80% gradient radius.
    const radius = Math.min(1, Math.hypot(x + 0.4, y - 0.5) / 1.6)
    const start = radius < 0.5 ? highlight : midtone
    const end = radius < 0.5 ? midtone : shadow
    color.copy(start).lerp(end, radius < 0.5 ? radius * 2 : radius * 2 - 1)

    switch (planet) {
      case 'earth': {
        const longitude =
          (((Math.atan2(x, z) * 180) / Math.PI + 200) % 360) - 180
        const latitude = (Math.asin(y) * 180) / Math.PI
        if (Math.abs(y) > 0.94) color.lerp(highlight, 0.25)
        else if (onLand(longitude, latitude)) color.lerp(shadow, 0.18)
        break
      }
      case 'jupiter':
      case 'saturn':
      case 'venus':
      case 'neptune': {
        const band = Math.sin(y * bandFrequencies[planet] + swirl * 0.55)
        color.lerp(band > 0 ? highlight : shadow, Math.abs(band) * 0.08)
        if (planet === 'jupiter' && z > 0) {
          const stormRadius =
            ((x - 0.35) / 0.25) ** 2 + ((y + 0.28) / 0.12) ** 2
          color.lerp(shadow, Math.exp(-stormRadius * 2) * 0.22 * z)
        }
        break
      }
      case 'pluto': {
        color.lerp(shadow, (swirl + 1) * 0.025)
        const hx = (x - 0.12) / 0.32
        const hy = (y - 0.12) / 0.3
        if (z > 0.5 && (hx * hx + hy * hy - 1) ** 3 - hx * hx * hy ** 3 < 0) {
          color.lerp(highlight, 0.18)
        }
        break
      }
      case 'mercury':
      case 'mars':
        color.lerp(shadow, Math.max(0, swirl) * 0.06)
        if (Math.sin(x * 23 + y * 17) * Math.sin(z * 19 - y * 13) > 0.88) {
          color.lerp(shadow, 0.18)
        }
        if (planet === 'mars' && y > 0.96) color.lerp(highlight, 0.18)
        break
      case 'uranus':
        color.lerp(highlight, (y + 1) * 0.025)
        break
      default: {
        const exhaustive: never = planet
        return exhaustive
      }
    }

    color.convertSRGBToLinear().toArray(colors, i * 3)
  }

  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))
  return geometry
}
