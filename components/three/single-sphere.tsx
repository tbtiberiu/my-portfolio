'use client'

import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import Sphere from './sphere'

const SingleSphere = () => {
  return (
    <div className="absolute w-full h-full -z-20 mt-10">
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
      <Sphere position={[0, 0, 0]} scale={4} />
    </group>
  )
}

export default SingleSphere