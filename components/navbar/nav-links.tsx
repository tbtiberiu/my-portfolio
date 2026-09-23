'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { poppins } from '@/app/fonts'

const links = [
  { name: 'Projects', href: '/#projects', cursorType: 'projects' },
  { name: 'Experience', href: '/#experience', cursorType: 'experience' },
  { name: 'About', href: '/#about', cursorType: 'about' },
]

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            data-cursor={link.cursorType}
            className={clsx(
              poppins.className,
              'relative py-1 text-sm sm:text-base font-light uppercase tracking-widest text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200',
            )}
          >
            <span>{link.name}</span>
          </Link>
        )
      })}
    </>
  )
}
