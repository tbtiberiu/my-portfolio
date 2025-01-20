'use client'

import { Canvas } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { Mesh, Group } from 'three'
import gsap from 'gsap'
import Sphere from './sphere'

const SpheresLine = () => {
  const canvasGroupRef = useRef<Group>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const positionX = scrollY / 100

      if (canvasGroupRef.current) {
        gsap.to(canvasGroupRef.current.position, {
          x: positionX - 10,
          duration: 0.3,
        })
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="spheres-line absolute w-full h-[800px] top-0 -z-20 -mt-80">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={1.25} />
        <directionalLight position={[-5, 5, 10]} intensity={2} />
        <group ref={canvasGroupRef}>
          <Spheres />
        </group>
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
