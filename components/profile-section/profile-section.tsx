import { MapPinIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { poppins } from '@/app/fonts'
import { GithubIcon, LinkedinIcon } from '@/components/shared/icons'
import ResumeButton from '../shared/resume-button/resume-button'

export default function ProfileSection() {
  return (
    <section className='profile-section w-full max-w-4xl pt-10 pb-20 lg:py-20 px-5'>
      <div className='relative z-10'>
        <h1
          className={`${poppins.className} text-4xl sm:text-5xl lg:text-6xl uppercase font-light tracking-wide text-foreground`}
        >
          Tiberiu-Ioan Boșcan
        </h1>
        <p
          className={`${poppins.className} text-xl sm:text-2xl mt-2 font-light text-slate-700 dark:text-gray-300`}
        >
          Software Developer
        </p>

        <div className='flex items-center mt-8 gap-2 text-sm text-slate-600 dark:text-gray-400 font-light'>
          <div className='w-5 text-primary' aria-hidden='true'>
            <MapPinIcon />
          </div>
          <p>Bucharest, Romania</p>
        </div>

        <div className='mt-6 space-y-4 max-w-3xl text-slate-700 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed'>
          <p>
            Software Developer with 3+ years of experience building software for
            financial trading and analytical instrumentation. I work primarily
            with Java and Spring Boot on backend services and React and
            TypeScript on user interfaces, alongside automated testing and
            CI/CD.
          </p>
          <p>
            My projects include DeForge-AI, an AI-generated image detector;
            Chess Snapshot, a chessboard recognition app; and Dedal's Labyrinth,
            a second-place hackathon project. I hold a Bachelor's in Computer
            Science from Transilvania University of Brașov and a Master's in
            Advanced Techniques in Digital Imaging from Politehnica University
            of Bucharest.
          </p>
        </div>
      </div>

      <div className='mt-8 relative z-10 flex flex-wrap items-center gap-4'>
        <ResumeButton title='View Resume' href='/resume' />
        <div className='flex items-center gap-2.5'>
          <Link
            href='https://github.com/tbtiberiu/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
            data-cursor='github'
            className='w-11 h-11 rounded-full border border-slate-300 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-slate-800 dark:text-gray-200 hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm'
          >
            <div className='w-5 h-5'>
              <GithubIcon />
            </div>
          </Link>
          <Link
            href='https://www.linkedin.com/in/tbtiberiu/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn Profile'
            data-cursor='linkedin'
            className='w-11 h-11 rounded-full border border-slate-300 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-slate-800 dark:text-gray-200 hover:text-[#0077b5] hover:border-[#0077b5]/50 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm'
          >
            <div className='w-5 h-5'>
              <LinkedinIcon />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
