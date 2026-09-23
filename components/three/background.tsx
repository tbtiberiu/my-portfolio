'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import type { Group } from 'three'
import Sphere from './sphere'

const Background = () => {
  return (
    <div className='absolute top-0 w-full h-[250vh] -z-10 hidden lg:block pointer-events-none'>
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[-5, 5, 10]} intensity={1.0} />
        <Spheres />
      </Canvas>
    </div>
  )
}

const Spheres = () => {
  const groupRef = useRef<Group>(null)
  const targetScrollY = useRef(0)

  useEffect(() => {
    targetScrollY.current = window.scrollY

    const onScroll = () => {
      targetScrollY.current = window.scrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame((state) => {
    const group = groupRef.current
    if (!group || group.children.length < 3) return

    const scrollY = targetScrollY.current
    const time = state.clock.getElapsedTime()

    // Sphere 0 (top-right hero sphere): subtle floating + smooth parallax
    const s0 = group.children[0]
    if (s0) {
      const targetX = 3.7 + Math.sin(time * 0.4) * 0.15
      const targetY = 4.8 + scrollY * 0.003 + Math.cos(time * 0.35) * 0.1
      s0.position.x += (targetX - s0.position.x) * 0.08
      s0.position.y += (targetY - s0.position.y) * 0.08
    }

    // Sphere 1 (mid-right hero sphere)
    const s1 = group.children[1]
    if (s1) {
      const targetX = 1.0 + Math.cos(time * 0.45) * 0.18
      const targetY = scrollY * 0.0035 + Math.sin(time * 0.4) * 0.12
      s1.position.x += (targetX - s1.position.x) * 0.08
      s1.position.y += (targetY - s1.position.y) * 0.08
    }

    // Sphere 2 (lower right transition sphere)
    const s2 = group.children[2]
    if (s2) {
      const targetX = 4.0 - scrollY * 0.0005 + Math.sin(time * 0.3) * 0.2
      const targetY = -6.0 + scrollY * 0.004 + Math.cos(time * 0.4) * 0.15
      s2.position.x += (targetX - s2.position.x) * 0.08
      s2.position.y += (targetY - s2.position.y) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere position={[3.7, 4.8, 0]} scale={1.3} />
      <Sphere position={[1, 0, 0]} scale={1.7} />
      <Sphere position={[4, -6, 0]} scale={2.7} />
    </group>
  )
}

export default Background
