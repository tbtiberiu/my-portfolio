'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div
      className="relative w-16 h-8 flex item-center dark:bg-gray-900 bg-primary cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="w-6 text-white">
        <MoonIcon />
      </div>
      <div
        className="absolute bg-white dark:bg-primary w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { right: '3px' } : { left: '3px' }}
      ></div>
      <div className="ml-auto w-6 text-yellow-400">
        <SunIcon />
      </div>
    </div>
  )
}
