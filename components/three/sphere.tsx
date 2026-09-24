import { type JSX, useRef } from 'react'
import type { Mesh } from 'three'

type SphereProps = JSX.IntrinsicElements['mesh'] & {
  color?: string
  roughness?: number
  metalness?: number
}

const Sphere: React.FC<SphereProps> = ({
  color = '#1A78C3',
  roughness = 0.65,
  metalness = 0.1,
  ...props
}) => {
  const meshRef = useRef<Mesh>(null)

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[1, 64, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  )
}

export default Sphere
