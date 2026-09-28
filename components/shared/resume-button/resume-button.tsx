import { DocumentTextIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface ResumeButtonProps {
  title: string
  href: string
}

export default function ResumeButton({ title, href }: ResumeButtonProps) {
  return (
    <Link
      href={href}
      aria-label={title}
      data-cursor='resume'
      className='cursor-pointer rotating-border-btn shadow-md hover:shadow-[0_0_20px_rgba(45,129,255,0.4)] transition-shadow duration-300'
    >
      <span className='relative z-10 w-full h-full px-7 py-3 rounded-full bg-background dark:bg-[#13171b] flex items-center justify-center gap-3 transition-colors duration-200'>
        <span className='font-semibold text-sm md:text-base text-gray-900 dark:text-white tracking-wide'>
          {title}
        </span>
        <DocumentTextIcon className='w-5 h-5' aria-hidden='true' />
      </span>
    </Link>
  )
}
