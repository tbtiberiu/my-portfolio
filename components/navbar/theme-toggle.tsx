'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    const shouldUseDark =
      storedTheme === 'dark' ||
      (!storedTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)

    setDarkMode(shouldUseDark)

    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      type='button'
      className='cursor-theme-toggle cursor-pointer relative w-16 h-8 flex item-center dark:bg-gray-900 bg-primary rounded-full p-1'
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className='w-6 text-white'>
        <MoonIcon />
      </div>
      <div
        className='absolute bg-white dark:bg-primary w-6 h-6 rounded-full shadow-md transform transition-transform duration-300'
        style={darkMode ? { right: '3px' } : { left: '3px' }}
      ></div>
      <div className='ml-auto w-6 text-yellow-400'>
        <SunIcon />
      </div>
    </button>
  )
}
