import Link from 'next/link'
import { poppins } from '@/app/fonts'
import { SendMailIcon } from '@/components/shared/icons'

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
      className='cursor-mail group p-3 rounded-full absolute m-auto left-0 right-0 md:right-16 bottom-2 sm:bottom-3 md:bottom-4 w-72 md:w-96 md:mr-0 z-20'
    >
      <div className='rotating-border-btn w-full shadow-md hover:shadow-[0_0_20px_rgba(45,129,255,0.4)] transition-shadow duration-300 absolute m-auto left-0 right-0 -bottom-2'>
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
        className='w-36 absolute bottom-0 right-0 -mr-10 z-10 hidden md:block pointer-events-none'
        aria-hidden='true'
      >
        <SendMailIcon />
      </div>
    </Link>
  )
}
