'use client'

import Image from 'next/image'
import { poppins } from '@/app/fonts'
import SendMailButton from '../shared/send-mail-button/send-mail-button'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='relative py-10 px-5 m-auto max-w-screen-xl lg:mt-10 mb-10'
    >
      <h2
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase my-6`}
      >
        About Me
      </h2>
      <div className='bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(17,17,17,0.9)] rounded-lg flex shadow-lg border-2 border-primary md:mr-20'>
        <div className='relative lg:w-1/4 hidden md:block'>
          <Image
            src='/images/about-me.jpg'
            alt='Image with me coding at a hackathon'
            fill
            className='rounded-md h-full object-cover object-left'
          />
        </div>
        <div className='cursor-default w-full lg:w-3/4 md:pl-8 p-4 md:p-10 flex flex-col justify-center leading-relaxed text-sm lg:text-base'>
          <p className='mb-6'>
            I discovered programming at the start of high school when a friend
            taught me my first lines of{' '}
            <span className='text-primary font-bold'>C++</span> code, along with
            the basics of <span className='text-primary font-bold'>HTML</span>{' '}
            and <span className='text-primary font-bold'>CSS</span>. That
            initial spark led me to develop a strong interest in{' '}
            <span className='text-primary font-bold'>web development</span>. In
            school, I quickly became skilled at solving problems in pseudocode,
            which deepened my passion for building and creating. I attended the
            PepinTeen coding bootcamp and participated in various contests, but
            the majority of my learning came from watching{' '}
            <span className='text-primary font-bold'>online tutorials</span> and{' '}
            <span className='text-primary font-bold'>
              building personal projects
            </span>
            .
          </p>
          <p className='mb-6'>
            During university, I expanded beyond frontend development, diving
            into <span className='text-primary font-bold'>backend</span>,{' '}
            <span className='text-primary font-bold'>mobile</span>,{' '}
            <span className='text-primary font-bold'>IoT technologies</span>,
            and more. I earned my{' '}
            <span className='text-primary font-bold'>
              computer science degree
            </span>{' '}
            by developing a robust algorithm for detecting the state of a chess
            game, blending{' '}
            <span className='text-primary font-bold'>problem-solving</span> and{' '}
            <span className='text-primary font-bold'>machine learning</span>{' '}
            with practical application. Now, with{' '}
            <span className='text-primary font-bold'>
              two years of professional software development experience
            </span>{' '}
            and a portfolio of diverse projects, I continue to push the
            boundaries of what I can create, always{' '}
            <span className='text-primary font-bold'>eager to learn</span>.
          </p>
          <p className='mb-6'>
            I&apos;m always excited to take on new challenges and collaborate on{' '}
            <span className='text-primary font-bold'>innovative projects</span>.
            With a solid{' '}
            <span className='text-primary font-bold'>
              background in development
            </span>{' '}
            and a{' '}
            <span className='text-primary font-bold'>
              passion for problem-solving
            </span>
            , I&apos;m confident I can contribute to your next digital venture.
            Feel free to reach out, and let&apos;s discuss how{' '}
            <span className='text-primary font-bold'>
              I can bring value to your team
            </span>
            .
          </p>
        </div>
      </div>
      <SendMailButton title='Contact Me' mail='tiberiuioan35@gmail.com' />
    </section>
  )
}
