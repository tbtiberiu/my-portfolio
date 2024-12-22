'use client'

import Image from 'next/image'
import { poppins } from '@/app/fonts'

export default function AboutSection() {
  return (
    <section id="about" className="py-10 px-5 m-auto max-w-screen-xl">
      <h2
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase mb-6`}
      >
        About Me
      </h2>
      <div className="bg-[rgba(17,17,17,0.9)] rounded-lg flex shadow-lg border-2 border-primary z-10">
        <div className="w-1/3">
          <Image
            src="/images/about-me.jpeg"
            alt="Image with me coding at a hackathon"
            className="rounded-md h-full object-fit"
            width={400}
            height={800}
          />
        </div>
        <div className="w-2/3 pl-8 text-white p-10 flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-6">
            As a frontend developer, I specialize in crafting engaging,
            responsive web applications. My expertise in HTML, CSS, JavaScript,
            and frameworks like Angular and React enables me to build dynamic
            and user-friendly interfaces.
          </p>
          <p className="text-lg leading-relaxed">
            I&apos;m passionate about merging aesthetics with functionality to
            create projects that are both visually appealing and
            high-performing. My strong problem-solving skills and understanding
            of coding best practices, grounded in my computer science
            background, drive me to deliver high-quality, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
