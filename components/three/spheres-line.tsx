'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'
import Sphere from './sphere'
import { isWebGLAvailable, WebGLErrorBoundary } from './webgl-guard'

const SpheresLine = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetX = useRef(0)
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    setCanRender(isWebGLAvailable())
  }, [])

  useEffect(() => {
    const updatePosition = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || 800
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const normalizedOffset = (elementCenter - viewportCenter) / windowHeight
      const clampedOffset = Math.max(-1.5, Math.min(1.5, normalizedOffset))
      targetX.current = -clampedOffset * 3.5
    }

    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition, { passive: true })
    updatePosition()

    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [])

  if (!canRender) return null

  return (
    <div
      ref={containerRef}
      className='spheres-line absolute w-full h-[850px] top-0 -z-20 -mt-72 pointer-events-none'
    >
      <WebGLErrorBoundary>
        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 50,
          }}
        >
          <ambientLight intensity={0.65} />
          <directionalLight position={[-5, 5, 10]} intensity={1.2} />
          <AnimatedSpheres targetX={targetX} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  )
}

const AnimatedSpheres: React.FC<{
  targetX: React.RefObject<number>
}> = ({ targetX }) => {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    const group = groupRef.current
    if (!group) return
    const time = state.clock.getElapsedTime()

    const currentX = group.position.x
    group.position.x += (targetX.current - currentX) * 0.06

    group.children.forEach((child, i) => {
      child.position.y += Math.sin(time * 0.6 + i * 0.8) * 0.0025
    })
  })

  return (
    <group ref={groupRef}>
      <Sphere position={[-12, 1.5, 0]} scale={0.9} />
      <Sphere position={[-7, -2.2, 0]} scale={0.75} />
      <Sphere position={[-4, 2.8, 0]} scale={0.95} />
      <Sphere position={[2, 3.5, 0]} scale={1.1} />
      <Sphere position={[7, 1.2, 0]} scale={0.85} />
      <Sphere position={[11, -2.0, 0]} scale={1.05} />
      <Sphere position={[15, 2.2, 0]} scale={0.9} />
      <Sphere position={[18, -1.5, 0]} scale={1.1} />
    </group>
  )
}

export default SpheresLine
