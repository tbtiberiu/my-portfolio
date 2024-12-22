'use client'

import Link from 'next/link'
import { BoldIcon } from '@heroicons/react/24/outline'
import NavLinks from './nav-links'
import ThemeToggle from './theme-toggle'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)

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

  return (
    <div
      className="sticky-navbar sticky top-0 items-center z-50"
      style={{
        background: `rgba(var(--background-rgb), ${Math.min(
          scrollProgress / 10,
          1
        )})`,
        color: `rgba(var(--foreground-rgb), 1)`,
      }}
    >
      <div
        className="scroll-progress-left"
        style={{ width: `${scrollProgress / 2}%` }}
      ></div>
      <div
        className="scroll-progress-right"
        style={{ width: `${scrollProgress / 2}%` }}
      ></div>
      <nav className="flex justify-between w-full px-2 py-4">
        <Link href="/">
          <div className="w-12 text-foreground">
            <BoldIcon />
          </div>
        </Link>
        <div className="flex items-center justify-between space-x-20">
          <NavLinks />
        </div>
        <div className="flex items-center px-3">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
