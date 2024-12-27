'use client'

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href: string
  download?: boolean
  target?: string
  rel?: string
}

export default function LinkButton({
  children,
  ...linkAttributes
}: ButtonProps) {
  return (
    <div
      className={`w-64 p-2 bg-gradient-to-r from-secondary to-primary rounded-full shadow-md`}
    >
      <Link
        {...linkAttributes}
        className="cursor-download w-full h-full px-6 py-3 text-black bg-white dark:text-white dark:bg-black space-x-2 font-medium rounded-full flex items-center justify-center"
      >
        {children}
      </Link>
    </div>
  )
}
