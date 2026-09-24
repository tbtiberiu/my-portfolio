import { MapPinIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { poppins } from '@/app/fonts'
import { GithubIcon, LinkedinIcon } from '@/components/shared/icons'
import DownloadButton from '../shared/download-button/download-button'

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
          Full-Stack Software Developer
        </p>

        <div className='flex items-center mt-8 gap-2 text-sm text-slate-600 dark:text-gray-400 font-light'>
          <div className='w-5 text-primary' aria-hidden='true'>
            <MapPinIcon />
          </div>
          <p>Bucharest, Romania</p>
        </div>

        <div className='mt-6 space-y-4 max-w-3xl text-slate-700 dark:text-gray-300 text-base sm:text-lg font-light leading-relaxed'>
          <p>
            I build reliable software, from responsive user interfaces to solid
            backend services. With experience spanning frontend, backend, and
            automated testing in enterprise environments, I have a clear sense
            of how large systems fit together end-to-end. My core stack centers
            on Java and Spring Boot on the backend, paired with React and
            TypeScript on the frontend.
          </p>
          <p>
            Beyond enterprise work, I love building creative side projects:
            interactive web apps, computer vision experiments, games, and
            hackathon prototypes. I hold a Bachelor&apos;s in Computer Science
            and a Master&apos;s in machine learning and computer vision from
            Politehnica Bucharest. Lately, I&apos;ve been using AI-assisted
            development workflows to move faster without cutting corners on
            testing, code quality, or engineering judgment.
          </p>
        </div>
      </div>

      <div className='mt-8 relative z-10 flex flex-wrap items-center gap-4'>
        <DownloadButton
          title='Download Resume'
          href='/Tiberiu-Ioan_Boscan_resume.pdf'
        />
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
