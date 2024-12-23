'use client'

import Image from 'next/image'
import { poppins } from '@/app/fonts'
import Link from 'next/link'
import SendIcon from '../shared/icons/send-mail/send-icon'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-10 px-5 m-auto max-w-screen-xl my-10"
    >
      <h2
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase my-6`}
      >
        About Me
      </h2>
      <div className="bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(17,17,17,0.9)] rounded-lg flex shadow-lg border-2 border-primary z-10 md:mx-20">
        <div className="w-1/3 hidden md:block">
          <Image
            src="/images/about-me.jpeg"
            alt="Image with me coding at a hackathon"
            className="rounded-md h-full object-cover object-left dark:brightness-50"
            width={400}
            height={800}
          />
        </div>
        <div className="w-full md:w-2/3 pl-8 p-10 flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-6">
            As a frontend developer, I specialize in crafting engaging,
            responsive web applications. My expertise in HTML, CSS, JavaScript,
            and frameworks like Angular and React enables me to build dynamic
            and user-friendly interfaces.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;m passionate about merging aesthetics with functionality to
            create projects that are both visually appealing and
            high-performing. My strong problem-solving skills and understanding
            of coding best practices, grounded in my computer science
            background, drive me to deliver high-quality, scalable solutions.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Committed to continuous learning, I stay updated with industry
            trends and actively seek new challenges through online courses and
            personal projects. I look forward to discussing how my skills can
            contribute to your next digital project.
          </p>
        </div>
      </div>
      <Link
        href="mailto:tiberiuioan35@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-md absolute m-auto left-0 right-0 md:right-16 bottom-0 w-96 md:mr-0"
      >
        <div className="w-full h-full px-6 py-3 text-black bg-white dark:text-white dark:bg-black font-medium rounded-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p
              className={`${poppins.className} text-2xl font-bold uppercase leading-tight`}
            >
              Contact Me
            </p>
            <p className="font-thin leading-tight">(tiberiuioan35@gmail.com)</p>
          </div>
          <div className="w-36 absolute bottom-0 right-0 -mr-9 hidden md:block">
            <SendIcon />
          </div>
        </div>
      </Link>
    </section>
  )
}
