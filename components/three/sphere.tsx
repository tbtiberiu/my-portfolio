import { useFrame } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import { type JSX, useEffect, useMemo, useRef } from 'react'
import { DoubleSide, type Group } from 'three'
import { orbPalette } from './orb-palette.js'
import { createPlanetGeometry, type Planet } from './planet-surface'

type SphereProps = JSX.IntrinsicElements['mesh'] & {
  planet: Planet
}

const Sphere: React.FC<SphereProps> = ({ planet, ...props }) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme !== 'light'
  const geometry = useMemo(
    () => createPlanetGeometry(planet, isDark ? 'dark' : 'light'),
    [planet, isDark],
  )
  const ringColor = orbPalette[isDark ? 'dark' : 'light'].highlight
  const rings = useRef<Group>(null)
  const reducedMotion = useRef(true)

  useEffect(() => () => geometry.dispose(), [geometry])

  useEffect(() => {
    if (planet !== 'saturn') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => {
      reducedMotion.current = media.matches
    }
    updateMotion()
    media.addEventListener('change', updateMotion)
    return () => media.removeEventListener('change', updateMotion)
  }, [planet])

  useFrame((_, delta) => {
    if (rings.current && !reducedMotion.current) {
      rings.current.rotation.z += Math.min(delta, 0.1) * 0.12
    }
  })

  return (
    <mesh {...props} geometry={geometry}>
      <meshBasicMaterial vertexColors toneMapped={false} />
      {planet === 'saturn' && (
        <group ref={rings}>
          <group rotation={[1.15, -0.25, 0.28]}>
            <mesh>
              <ringGeometry args={[1.18, 1.48, 128]} />
              <meshBasicMaterial
                color={ringColor}
                toneMapped={false}
                side={DoubleSide}
                transparent
                opacity={0.4}
              />
            </mesh>
            <mesh>
              <ringGeometry args={[1.53, 1.72, 128]} />
              <meshBasicMaterial
                color={ringColor}
                toneMapped={false}
                side={DoubleSide}
                transparent
                opacity={0.18}
              />
            </mesh>
          </group>
        </group>
      )}
    </mesh>
  )
}

export default Sphere
