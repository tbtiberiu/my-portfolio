import Link from 'next/link'
import { BoldIcon } from '@heroicons/react/24/outline'
import NavLinks from './nav-links'
import ThemeToggle from './theme-toggle'

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full px-3 py-4 md:px-2">
      <Link href="/">
        <div className="w-16 text-foreground">
          <BoldIcon />
        </div>
      </Link>
      <div className="flex items-center justify-between space-x-20">
        <NavLinks />
      </div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </nav>
  )
}
