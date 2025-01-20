'use client'

import Link from 'next/link'
import SendIcon from '../icons/send-mail/send-icon'
import { poppins } from '@/app/fonts'
import styles from './send-mail-button.module.scss'
import clsx from 'clsx'

interface ButtonProps {
  title: string
  mail: string
}

export default function SendMailButton({ title, mail }: ButtonProps) {
  return (
    <Link
      href={`mailto:${mail}`}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'cursor-mail p-3 rounded-full shadow-md absolute m-auto left-0 right-0 md:right-16 bottom-0 w-72 md:w-96 md:mr-0'
      )}
    >
      <div
        className={clsx(
          styles.sendMailButton,
          'cursor-mail p-3 rounded-full shadow-md absolute m-auto left-0 right-0 -bottom-2 w-72 md:w-96 md:mr-0'
        )}
      >
        <div
          className={clsx(
            styles.sendMailButtonInner,
            'w-full h-full px-6 py-3 text-black bg-background dark:text-white font-medium rounded-full flex items-center justify-center'
          )}
        >
          <div className="flex flex-col items-center">
            <p
              className={`${poppins.className} text-lg md:text-2xl font-bold uppercase leading-tight`}
            >
              {title}
            </p>
            <p className="font-thin leading-tight">({mail})</p>
          </div>
        </div>
      </div>
      <div className="w-36 absolute bottom-0 right-0 -mr-10 z-10 hidden md:block">
        <SendIcon />
      </div>
    </Link>
  )
}
