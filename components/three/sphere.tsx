import { useFrame } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import { type JSX, useEffect, useMemo, useRef } from 'react'
import { Color, type Group, type MeshPhysicalMaterial } from 'three'

type SphereProps = JSX.IntrinsicElements['mesh'] & {
  color?: string
  roughness?: number
  metalness?: number
}

const Sphere: React.FC<SphereProps> = ({
  color,
  roughness = 0.62,
  metalness = 0.05,
  ...props
}) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme !== 'light'
  const surface = useRef<MeshPhysicalMaterial>(null)
  const orbit = useRef<Group>(null)
  const reducedMotion = useRef(false)
  const targetColor = useMemo(
    () => new Color(color ?? (isDark ? '#2c8edb' : '#54aaf1')),
    [color, isDark],
  )
  const initialColor = useRef(targetColor)
  const ringColor = isDark ? '#86caff' : '#1d72dd'

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => {
      reducedMotion.current = media.matches
    }
    updateMotion()
    media.addEventListener('change', updateMotion)
    return () => media.removeEventListener('change', updateMotion)
  }, [])

  useFrame((_, delta) => {
    surface.current?.color.lerp(
      targetColor,
      reducedMotion.current ? 1 : 1 - Math.exp(-delta * 10),
    )
    if (orbit.current && !reducedMotion.current) {
      orbit.current.rotation.z += delta * 0.06
    }
  })

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 32]} />
      <meshPhysicalMaterial
        ref={surface}
        color={initialColor.current}
        roughness={roughness}
        metalness={metalness}
        clearcoat={0.28}
        clearcoatRoughness={0.7}
        emissive={isDark ? '#115c9a' : '#3293e2'}
        emissiveIntensity={isDark ? 0.12 : 0.28}
      />
      <mesh>
        <sphereGeometry args={[1.003, 32, 16]} />
        <meshBasicMaterial
          color={ringColor}
          wireframe
          transparent
          opacity={isDark ? 0.09 : 0.07}
          depthWrite={false}
        />
      </mesh>
      <group rotation={[0.7, -0.4, 0.25]}>
        <group ref={orbit}>
          <mesh>
            <torusGeometry args={[1.2, 0.0025, 8, 128]} />
            <meshBasicMaterial color={ringColor} transparent opacity={0.3} />
          </mesh>
          <mesh position={[1.2, 0, 0]}>
            <sphereGeometry args={[0.028, 12, 8]} />
            <meshBasicMaterial color={ringColor} />
          </mesh>
        </group>
      </group>
    </mesh>
  )
}

export default Sphere
