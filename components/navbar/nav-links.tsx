'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { poppins } from '@/app/fonts'

const links = [
  { name: 'Projects', href: '/#projects', cursorType: 'projects' },
  { name: 'Experience', href: '/#experience', cursorType: 'experience' },
  { name: 'About', href: '/#about', cursorType: 'about' },
  { name: 'Resume', href: '/resume', cursorType: 'resume' },
]

export default function NavLinks() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            scroll
            onClick={(event) => {
              if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              ) {
                return
              }

              const [targetPath = '/', targetHash] = link.href.split('#')
              if (pathname !== targetPath) {
                if (targetPath === '/resume' && !targetHash) {
                  event.preventDefault()
                  const root = document.documentElement
                  const previousScrollBehavior = root.style.scrollBehavior
                  root.style.scrollBehavior = 'auto'
                  window.scrollTo(0, 0)
                  root.style.scrollBehavior = previousScrollBehavior
                  router.push(link.href, { scroll: false })
                }
                return
              }

              event.preventDefault()

              if (targetHash) {
                const hash = `#${targetHash}`
                if (window.location.hash !== hash) {
                  window.history.pushState(null, '', `${targetPath}${hash}`)
                }
                document.getElementById(targetHash)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
                return
              }

              if (window.location.hash) {
                window.history.pushState(null, '', targetPath)
              }
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
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
