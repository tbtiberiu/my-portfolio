'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MyLogo } from '../shared/icons'
import NavLinks from './nav-links'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(scrollPercentage)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className='sticky-navbar sticky top-0 items-center z-50 backdrop-blur-md'
      style={{
        background: `rgba(var(--color-background-rgb), ${Math.min(
          scrollProgress / 5,
          0.85,
        )})`,
        color: `rgb(var(--color-foreground-rgb))`,
      }}
    >
      <div
        className='absolute top-0 left-1/2 h-[2px] bg-primary transition-all duration-75'
        style={{ width: `${scrollProgress / 2}%` }}
        aria-hidden='true'
      />
      <div
        className='absolute top-0 right-1/2 h-[2px] bg-primary transition-all duration-75'
        style={{ width: `${scrollProgress / 2}%` }}
        aria-hidden='true'
      />
      <nav
        className='flex justify-between items-center w-full px-4 py-3.5 gap-4'
        aria-label='Main navigation'
      >
        <Link
          href='/'
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

            event.preventDefault()

            if (pathname === '/') {
              if (window.location.hash) {
                window.history.pushState(null, '', '/')
              }
              window.scrollTo({ top: 0, behavior: 'smooth' })
              return
            }

            const root = document.documentElement
            const previousScrollBehavior = root.style.scrollBehavior
            root.style.scrollBehavior = 'auto'
            window.scrollTo(0, 0)
            root.style.scrollBehavior = previousScrollBehavior
            router.push('/', { scroll: false })
          }}
          data-cursor='logo'
          className='mx-2 w-10 text-foreground hidden sm:block transition-transform duration-200 hover:scale-105 cursor-pointer'
          aria-label='Home'
        >
          <MyLogo />
        </Link>
        <div className='flex items-center gap-3 sm:gap-6 md:gap-10'>
          <NavLinks />
        </div>
        <div className='flex items-center mx-2' data-cursor='theme-toggle'>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
