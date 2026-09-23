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
            I build reliable, high-throughput software with Java and Spring Boot
            on the backend, paired with modern React and TypeScript on the
            frontend. Currently focused on financial trading architecture,
            modular workspaces, and automated CI/CD pipelines, I thrive on
            delivering resilient, end-to-end solutions.
          </p>
          <p>
            Beyond enterprise development, I build for fun: interactive games,
            hackathon-winning algorithms, simulations, and intelligent web
            applications. I hold a Master&apos;s degree in Advanced Techniques
            in Digital Imaging (TAID) from National University of Science and
            Technology Politehnica Bucharest, alongside a Bachelor&apos;s in
            Computer Science. Lately, I have been focused on AI-assisted and
            agentic development workflows—using modern tooling to accelerate
            delivery while upholding rigorous software and testing standards.
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
