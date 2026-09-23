'use client'

import { useEffect, useState } from 'react'
import { MyLogo } from '../shared/icons'
import NavLinks from './nav-links'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
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

  const handleLogoIconClick = () => {
    window.history.replaceState(null, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        <button
          type='button'
          data-cursor='logo'
          className='mx-2 w-10 text-foreground hidden sm:block transition-transform duration-200 hover:scale-105 cursor-pointer'
          onClick={handleLogoIconClick}
          aria-label='Scroll to top'
        >
          <MyLogo />
        </button>
        <div className='flex items-center gap-6 sm:gap-8 md:gap-10'>
          <NavLinks />
        </div>
        <div className='flex items-center mx-2' data-cursor='theme-toggle'>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
