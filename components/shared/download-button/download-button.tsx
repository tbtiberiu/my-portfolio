'use client'

import Link from 'next/link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

interface ButtonProps {
  href: string
}

export default function DownloadButton({ href }: ButtonProps) {
  return (
    <div
      className={`w-64 p-2 bg-gradient-to-r from-secondary to-primary rounded-full shadow-md`}
    >
      <Link
        href={href}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-download w-full h-full px-6 py-3 text-black bg-white dark:text-white dark:bg-black space-x-2 font-medium rounded-full flex items-center justify-center"
      >
        <p>Download Resume</p>
        <div className="w-6">
          <ArrowDownTrayIcon />
        </div>
      </Link>
    </div>
  )
}
