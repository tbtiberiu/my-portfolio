import Link from 'next/link'
import { poppins } from '@/app/fonts'
import { SendMailIcon } from '@/components/shared/icons'
import BuildFrame from '../scroll-build/build-frame'

interface ButtonProps {
  title: string
  mail: string
}

export default function SendMailButton({ title, mail }: ButtonProps) {
  return (
    <Link
      href={`mailto:${mail}`}
      aria-label={`${title}: ${mail}`}
      data-cursor='mail'
      data-build='contact-button'
      data-build-button
      data-build-enter='bottom-right'
      className='cursor-mail group rounded-full absolute m-auto left-0 right-0 md:right-7 bottom-0 sm:bottom-1 md:bottom-2 w-72 md:w-[26.25rem] md:pt-12 md:pr-9 md:mr-0 z-20'
    >
      <BuildFrame button />
      <div className='rotating-border-btn w-full shadow-md hover:shadow-[0_0_20px_rgba(45,129,255,0.4)] transition-shadow duration-300'>
        <div className='relative z-10 w-full h-full px-6 md:px-8 py-3 md:py-4 rounded-full bg-background dark:bg-[#13171b] flex flex-col items-center justify-center transition-colors duration-200'>
          <p
            className={`${poppins.className} text-base md:text-lg font-semibold tracking-tight leading-tight text-foreground`}
          >
            {title}
          </p>
          <p className='text-xs md:text-sm text-gray-500 dark:text-gray-400 font-normal leading-tight mt-0.5'>
            {mail}
          </p>
        </div>
      </div>
      <div
        className='w-28 absolute bottom-2 right-1 z-10 hidden md:block pointer-events-none animate-plane-float'
        aria-hidden='true'
      >
        <SendMailIcon />
      </div>
    </Link>
  )
}
