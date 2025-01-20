'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
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
    <div className="absolute top-0 w-full h-[250vh] -z-10 hidden lg:block">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[-5, 5, 10]} intensity={2} />
        <Spheres scrollY={scrollY} />
      </Canvas>
    </div>
  )
}

const Spheres: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const groupRef = useRef<Mesh>(null)

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.children[0].position, {
        x: 3.7 + scrollY * 0.001,
        y: 4.8 + scrollY * 0.005,
        duration: 0.3,
      })

      gsap.to(groupRef.current.children[1].position, {
        x: 1 + scrollY * 0.001,
        y: scrollY * 0.005,
        duration: 0.3,
      })

      gsap.to(groupRef.current.children[2].position, {
        x: 4 - scrollY * 0.002,
        y: -6 + scrollY * 0.005,
        duration: 0.3,
      })
    }
  }, [scrollY])

  return (
    <group ref={groupRef}>
      <Sphere position={[3.7, 4.8, 0]} scale={1.3} />
      <Sphere position={[1, 0, 0]} scale={1.7} />
      <Sphere position={[4, -6, 0]} scale={2.7} />
    </group>
  )
}

export default Background
