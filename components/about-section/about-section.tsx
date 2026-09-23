import Image from 'next/image'
import { poppins } from '@/app/fonts'
import SendMailButton from '../shared/send-mail-button/send-mail-button'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='relative py-10 px-5 m-auto max-w-screen-xl lg:mt-10 mb-20 pb-16 scroll-mt-24'
    >
      <div className='mb-6'>
        <h2
          className={`${poppins.className} text-3xl md:text-4xl uppercase font-light tracking-wide text-foreground`}
        >
          About Me
        </h2>
      </div>

      <div className='relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl flex flex-col md:flex-row shadow-sm border border-slate-200 dark:border-gray-800 md:mr-20 overflow-hidden'>
        <div className='relative md:w-1/3 min-h-[300px] hidden md:block overflow-hidden'>
          <Image
            src='/images/about-me.jpg'
            alt='Image with me coding at a hackathon'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw'
            className='h-full object-cover object-left transition-transform duration-500 hover:scale-105'
          />
        </div>
        <div className='cursor-default w-full md:w-2/3 p-6 md:p-10 md:pb-12 flex flex-col justify-center leading-relaxed text-sm md:text-base font-light text-slate-700 dark:text-gray-300 space-y-4'>
          <p>
            I discovered programming at the start of high school when a friend
            taught me my first lines of{' '}
            <span className='text-foreground dark:text-white font-normal'>
              C++
            </span>{' '}
            code, along with the basics of{' '}
            <span className='text-foreground dark:text-white font-normal'>
              HTML
            </span>{' '}
            and{' '}
            <span className='text-foreground dark:text-white font-normal'>
              CSS
            </span>
            . That initial spark led me to develop a strong interest in{' '}
            <span className='text-primary font-medium'>web development</span>.
            In school, I quickly became skilled at solving algorithmic problems,
            attended the PepinTeen coding bootcamp, and built hands-on personal
            projects to understand systems from the ground up.
          </p>
          <p>
            During university at Transilvania University of Brașov, I expanded
            across full-stack development, mobile, and automation, earning my{' '}
            <span className='text-foreground dark:text-white font-normal'>
              Computer Science degree
            </span>{' '}
            by creating a computer vision algorithm for real-time chess state
            recognition. Building on that foundation, I earned my{' '}
            <span className='text-foreground dark:text-white font-normal'>
              Master&apos;s degree in Advanced Techniques in Digital Imaging
              (TAID)
            </span>{' '}
            at National University of Science and Technology Politehnica
            Bucharest.
          </p>
          <p>
            In my current role at{' '}
            <span className='text-foreground dark:text-white font-normal'>
              Société Générale
            </span>
            , I build high-availability trading systems and modern interfaces. I
            actively integrate{' '}
            <span className='text-primary font-normal'>
              AI-assisted development workflows
            </span>{' '}
            to ship robust code faster while maintaining uncompromising
            standards on automated testing and architecture. Feel free to reach
            out—I&apos;m always excited to connect and collaborate on ambitious
            technical challenges.
          </p>
        </div>
      </div>
      <SendMailButton title='Contact Me' mail='tiberiuioan35@gmail.com' />
    </section>
  )
}
