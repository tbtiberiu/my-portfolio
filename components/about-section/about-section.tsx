'use client'

import Image from 'next/image'
import { poppins } from '@/app/fonts'
import Link from 'next/link'
import SendIcon from '../shared/icons/send-mail/send-icon'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-10 px-5 m-auto max-w-screen-xl lg:my-10"
    >
      <h2
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase my-6`}
      >
        About Me
      </h2>
      <div className="bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(17,17,17,0.9)] rounded-lg flex shadow-lg border-2 border-primary z-10 md:mr-20">
        <div className="relative lg:w-1/4 hidden md:block">
          <Image
            src="/images/about-me.jpeg"
            alt="Image with me coding at a hackathon"
            className="rounded-md h-full object-cover object-left dark:brightness-50"
            layout="fill"
          />
        </div>
        <div className="w-full lg:w-3/4 pl-8 p-10 flex flex-col justify-center leading-relaxed text-sm lg:text-base">
          <p className="mb-6">
            I discovered programming at the start of high school when a friend
            taught me my first lines of C++ code, along with the basics of HTML
            and CSS. That initial spark led me to develop a strong interest in
            web development. In school, I quickly became skilled at solving
            problems in pseudocode, which deepened my passion for building and
            creating. I attended the PepinTeen coding bootcamp and participated
            in various contests, but the majority of my learning came from
            watching online tutorials and building personal projects.
          </p>
          <p className="mb-6">
            During university, I expanded beyond frontend development, diving
            into backend, mobile, IoT technologies, and more. I earned my
            computer science degree by developing a robust algorithm for
            detecting the state of a chess game, blending problem-solving and
            machine learning with practical application. Now, with two years of
            professional software development experience and a portfolio of
            diverse projects, I continue to push the boundaries of what I can
            create, always eager to learn and grow.
          </p>
          <p className="mb-6">
            I&apos;m always excited to take on new challenges and collaborate on
            innovative projects. With a solid background in development and a
            passion for problem-solving, I&apos;m confident I can contribute to
            your next digital venture. Feel free to reach out, and let&apos;s
            discuss how I can bring value to your team.
          </p>
        </div>
      </div>
      <Link
        href="mailto:tiberiuioan35@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-md absolute m-auto left-0 right-0 md:right-16 bottom-0 w-72 md:w-96 md:mr-0"
      >
        <div className="w-full h-full px-6 py-3 text-black bg-white dark:text-white dark:bg-black font-medium rounded-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p
              className={`${poppins.className} text-lg md:text-2xl font-bold uppercase leading-tight`}
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
