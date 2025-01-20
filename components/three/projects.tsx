// MIGHT USE THIS SOMETIME
// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { useEffect, useRef } from 'react'
// import { Group } from 'three'
// import gsap from 'gsap'
// import Sphere from './sphere'

// const Background = () => {
//   return (
//     <div className="absolute top-0 w-full h-[250vh] -z-10 -mt-80 hidden lg:block">
//       <Canvas
//         camera={{
//           position: [0, 30, 30], // Position the camera above the circle
//           fov: 50,
//         }}
//       >
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[-5, 5, 10]} intensity={2} />
//         <RotatingCircle />
//       </Canvas>
//     </div>
//   )
// }

// const RotatingCircle = () => {
//   const groupRef = useRef<Group>(null)

//   useEffect(() => {
//     if (!groupRef.current) return

//     // Animate the entire group to rotate around its center
//     gsap.to(groupRef.current.rotation, {
//       y: Math.PI * 2, // Rotate 360 degrees
//       repeat: -1, // Infinite loop
//       duration: 20, // Time for one full rotation
//       ease: 'linear', // Smooth and continuous rotation
//     })
//   }, [])

//   const numSpheres = 12 // Increase the number of spheres
//   const radius = 25 // Increased the radius to make the circle bigger

//   // Generate sphere positions in a circle
//   const spheres = Array.from({ length: numSpheres }, (_, i) => {
//     const angle = (i / numSpheres) * Math.PI * 2
//     const x = Math.cos(angle) * radius
//     const z = Math.sin(angle) * radius
//     return <Sphere key={i} position={[x, 0, z]} scale={1.5} />
//   })

//   return <group ref={groupRef}>{spheres}</group>
// }

// export default Background
