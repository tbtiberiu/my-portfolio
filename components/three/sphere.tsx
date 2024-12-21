import { JSX, useRef } from 'react'
import { Mesh } from 'three'

const Sphere: React.FC<JSX.IntrinsicElements['mesh']> = (props) => {
  const meshRef = useRef<Mesh>(null)

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[1, 64, 32]} />
      <meshStandardMaterial color="#1A78C3" />
    </mesh>
  )
}

export default Sphere
