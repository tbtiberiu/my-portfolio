import Link from 'next/link'
import { BoldIcon } from '@heroicons/react/24/outline'
import NavLinks from './nav-links'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full px-2 py-4">
      <Link href="/">
        <div className="w-16 text-foreground">
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
  )
}
