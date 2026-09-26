'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'
import Sphere from './sphere'
import { isWebGLAvailable, WebGLErrorBoundary } from './webgl-guard'

const SingleSphere = () => {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    setCanRender(isWebGLAvailable())
  }, [])

  if (!canRender) return null

  return (
    <div className='absolute -top-[60px] w-full h-[calc(100%+160px)] -z-20 pointer-events-none'>
      <WebGLErrorBoundary>
        <Canvas
          camera={{
            position: [0, 0, 11],
            fov: 50,
          }}
        >
          <ambientLight intensity={1.4} />
          <directionalLight position={[-5, 5, 10]} intensity={1.0} />
          <Spheres />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  )
}

const Spheres: React.FC = () => {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const scale = 1 + Math.sin(state.clock.getElapsedTime()) * 0.02
    groupRef.current.scale.set(scale, scale, scale)
  })

  return (
    <group ref={groupRef}>
      <Sphere position={[0, 0, 0]} scale={3.6} />
    </group>
  )
}

export default SingleSphere
