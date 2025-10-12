'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { poppins } from '@/app/fonts'

const links = [
  { name: 'Projects', href: '/#projects', cursor: 'cursor-projects' },
  { name: 'Experience', href: '/#experience', cursor: 'cursor-experience' },
  { name: 'About', href: '/#about', cursor: 'cursor-about' },
]

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              poppins.className,
              link.cursor,
              'flex text-sm sm:text-lg md:text-xl hover:text-primary uppercase grow items-center justify-center gap-2',
            )}
          >
            <span className='p-2'>{link.name}</span>
          </Link>
        )
      })}
    </>
  )
}
