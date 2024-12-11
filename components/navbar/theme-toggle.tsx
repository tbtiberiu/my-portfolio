'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
  })

  return <div className="">ThemeToggle</div>
}
