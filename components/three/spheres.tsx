'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Mesh } from 'three'
import Sphere from './sphere'

const Background = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="background absolute w-full top-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={1.25} />
        <directionalLight position={[-5, 5, 10]} intensity={2} />
        <Spheres scrollY={scrollY} />
      </Canvas>
    </div>
  )
}

const Spheres: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const groupRef = useRef<Mesh>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = scrollY * 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere position={[3, 4.7, 0]} scale={1} />
      <Sphere position={[1, 0.5, 0]} scale={1.5} />
      <Sphere position={[4, -6, 0]} scale={3} />
    </group>
  )
}

export default Background
