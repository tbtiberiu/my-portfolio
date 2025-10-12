'use client'

import Link from 'next/link'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import styles from './download-button.module.scss'
import clsx from 'clsx'

interface ButtonProps {
  title: string
  href: string
}

export default function DownloadButton({ title, href }: ButtonProps) {
  return (
    <Link
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        styles.downloadButton,
        `cursor-download w-64 rounded-full shadow-md`
      )}
    >
      <div
        className={clsx(
          styles.downloadButtonInner,
          'w-full h-full px-6 py-3 text-white bg-backgroundStart font-medium rounded-full flex flex-row gap-2 items-center justify-around'
        )}
      >
        <p>{title}</p>
        <div className="w-6">
          <ArrowDownTrayIcon />
        </div>
      </div>
    </Link>
  )
}
