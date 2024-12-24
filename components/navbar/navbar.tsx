'use client'

import { BoldIcon } from '@heroicons/react/24/outline'
import NavLinks from './nav-links'
import ThemeToggle from './theme-toggle'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      setScrollProgress(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBoldIconClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <div
      className="sticky-navbar sticky top-0 items-center z-50"
      style={{
        background: `rgba(var(--background-rgb), ${Math.min(
          scrollProgress / 5,
          1
        )})`,
        color: `rgb(var(--foreground-rgb))`,
      }}
    >
      <div
        className="absolute top-0 left-1/2 h-1 bg-primary"
        style={{ width: `${scrollProgress / 2}%` }}
      ></div>
      <div
        className="absolute top-0 right-1/2 h-1 bg-primary"
        style={{ width: `${scrollProgress / 2}%` }}
      ></div>
      <nav className="flex justify-between w-full px-2 py-4 gap-4">
        <div
          className="w-12 text-foreground cursor-pointer hidden xs:block"
          onClick={handleBoldIconClick}
        >
          <BoldIcon />
        </div>
        <div className="flex items-center justify-between gap-6 md:gap-20">
          <NavLinks />
        </div>
        <div className="flex items-center px-3">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
