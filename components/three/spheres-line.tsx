'use client'

import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import Sphere from './sphere'

const SpheresLine = () => {
  return (
    <div className="spheres-line absolute w-full h-full top-0 -z-10 -mt-40">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={1.25} />
        <directionalLight position={[-5, 5, 10]} intensity={2} />
        <Spheres />
      </Canvas>
    </div>
  )
}

const Spheres: React.FC = () => {
  const groupRef = useRef<Mesh>(null)
  return (
    <group ref={groupRef}>
      <Sphere position={[1, 0.5, 0]} scale={1.5} />
      <Sphere position={[-10, 0, 0]} scale={1} />
      <Sphere position={[-5, 1, 0]} scale={1} />
      <Sphere position={[-3, -2, 0]} scale={1} />
      <Sphere position={[6, 0.5, 0]} scale={1} />
      <Sphere position={[13, 1, 0]} scale={1} />
      <Sphere position={[10, -2, 0]} scale={1.5} />
      <Sphere position={[-14, 3, 0]} scale={1} />
      <Sphere position={[17, -2, 0]} scale={1.5} />
      <Sphere position={[-17, -2, 0]} scale={1.5} />
    </group>
  )
}

export default SpheresLine
