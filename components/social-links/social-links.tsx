import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from '@/components/shared/icons'

export default function SocialLinks() {
  return (
    <aside
      className='hidden lg:block sticky float-end top-24 z-40'
      style={{
        marginTop: '9rem',
        marginRight: 'max(1.25rem, calc((100% - 1280px) / 2 + 1.25rem))',
      }}
      aria-label='Social profiles'
    >
      <div className='flex flex-col gap-3'>
        <Link
          href='https://www.linkedin.com/in/tbtiberiu/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn Profile'
          data-cursor='linkedin'
          className='block rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
        >
          <div className='w-13 h-13 sm:w-14 sm:h-14 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-slate-300 dark:border-gray-800 text-slate-800 dark:text-gray-200 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] hover:border-[#0077b5] rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg cursor-pointer group'>
            <div
              className='w-6 h-6 sm:w-7 sm:h-7 transition-colors'
              aria-hidden='true'
            >
              <LinkedinIcon />
            </div>
          </div>
        </Link>
        <Link
          href='https://github.com/tbtiberiu/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub Profile'
          data-cursor='github'
          className='block rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
        >
          <div className='w-13 h-13 sm:w-14 sm:h-14 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-slate-300 dark:border-gray-800 text-slate-800 dark:text-gray-200 hover:text-white hover:bg-gray-900 dark:hover:bg-black hover:border-gray-900 dark:hover:border-black rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg cursor-pointer group'>
            <div
              className='w-6 h-6 sm:w-7 sm:h-7 transition-colors'
              aria-hidden='true'
            >
              <GithubIcon />
            </div>
          </div>
        </Link>
      </div>
    </aside>
  )
}
