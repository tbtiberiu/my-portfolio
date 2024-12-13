// components/ProfileSection.tsx
import { poppins } from '@/app/fonts'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function ProfileSection() {
  return (
    <div className="w-full max-w-4xl py-16 px-8">
      <h1 className={`${poppins.className} text-5xl uppercase`}>
        Boșcan Tiberiu-Ioan
      </h1>
      <p className={`${poppins.className} text-2xl mt-2`}>
        Frontend Developer interested in Computer Vision
      </p>

      <div className="flex items-center mt-10 space-x-2">
        <div className="w-6 text-black dark:text-white">
          <MapPinIcon />
        </div>
        <p>Bucharest, Romania</p>
      </div>

      <p className="mt-4">
        As a frontend developer, I specialize in crafting engaging, responsive
        web applications. My expertise in HTML, CSS, JavaScript, and frameworks
        like Angular and React enables me to build dynamic and user-friendly
        interfaces.
      </p>
      <p className="mt-4">
        I&apos;m passionate about merging aesthetics with functionality to
        create projects that are both visually appealing and high-performing. My
        strong problem-solving skills and understanding of coding best
        practices, grounded in my computer science background, drive me to
        deliver high-quality, scalable solutions.
      </p>

      <button className="mt-8 px-6 py-3 bg-primary space-x-2 text-white font-medium rounded-full flex items-center justify-center shadow-md hover:bg-secondary transition">
        <p>Download Resume</p>
        <div className="w-6 text-white">
          <ArrowDownTrayIcon />
        </div>
      </button>
    </div>
  )
}