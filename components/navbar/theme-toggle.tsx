'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      type='button'
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className='cursor-theme-toggle cursor-pointer relative w-16 h-8 flex items-center dark:bg-gray-900 bg-primary rounded-full p-1 transition-colors duration-200'
      onClick={toggleTheme}
    >
      <div className='w-6 text-white' aria-hidden='true'>
        <MoonIcon />
      </div>
      <div
        className={clsx(
          'absolute left-1 bg-white dark:bg-primary w-6 h-6 rounded-full shadow-md transition-transform duration-300 ease-in-out',
          isDark ? 'translate-x-8' : 'translate-x-0',
        )}
      />
      <div className='ml-auto w-6 text-yellow-400' aria-hidden='true'>
        <SunIcon />
      </div>
    </button>
  )
}
