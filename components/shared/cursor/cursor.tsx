'use client'

import {
  ArchiveBoxIcon,
  ArrowDownTrayIcon,
  ArrowUpRightIcon,
  BoldIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EnvelopeIcon,
  FunnelIcon,
  IdentificationIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { JSX, useEffect } from 'react'
import GithubIcon from '../icons/github/github-icon'
import LinkedinIcon from '../icons/linkedin/linkedin-icon'

const CURSOR_CLASSES = [
  'view',
  'expand',
  'collapse',
  'logo',
  'github',
  'linkedin',
  'download',
  'mail',
  'filter',
  'projects',
  'experience',
  'about',
  'theme-toggle',
]

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor')
    const cursorTexts: Record<string, HTMLSpanElement | null> = {}

    CURSOR_CLASSES.forEach((cls) => {
      cursorTexts[cls] = document.querySelector(
        `.cursor-text-${cls}`
      ) as HTMLSpanElement | null
    })

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      gsap.to(cursor, { x: clientX, y: clientY })
    }

    const onMouseEnterElement = (event: Event) => {
      const target = event.target as HTMLElement
      const matchingClass = CURSOR_CLASSES.find((cls) =>
        target.classList.contains(`cursor-${cls}`)
      )

      gsap.to(cursor, { scale: 2.5 })
      if (matchingClass && cursorTexts[matchingClass]) {
        cursorTexts[matchingClass]!.style.display = 'block'
      }
    }

    const onMouseLeaveElement = () => {
      gsap.to(cursor, { scale: 1 })
      Object.values(cursorTexts).forEach((el) => {
        if (el) el.style.display = 'none'
      })
    }

    const addListeners = (elements: NodeListOf<Element>) => {
      elements.forEach((element) => {
        element.addEventListener('mouseenter', onMouseEnterElement)
        element.addEventListener('mouseleave', onMouseLeaveElement)
      })
    }

    const interactiveElements = document.querySelectorAll('a, button')
    addListeners(interactiveElements)

    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button')
      addListeners(newElements)
    })

    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      id="custom-cursor"
      className="custom-cursor text-white tracking-wide font-semibold border-[1px] border-secondary"
    >
      {CURSOR_CLASSES.map((cls) => (
        <span
          key={cls}
          className={clsx(
            `cursor-text cursor-text-${cls}`,
            'w-24 scale-150 hidden'
          )}
        >
          {getIcon(cls)}
        </span>
      ))}
    </div>
  )
}

const getIcon = (cls: string) => {
  const icons: Record<string, JSX.Element> = {
    view: <ArrowUpRightIcon />,
    expand: <ChevronDownIcon />,
    collapse: <ChevronUpIcon />,
    logo: <BoldIcon />,
    github: <GithubIcon />,
    linkedin: <LinkedinIcon />,
    download: <ArrowDownTrayIcon />,
    mail: <EnvelopeIcon />,
    filter: <FunnelIcon />,
    projects: <ArchiveBoxIcon />,
    experience: <BriefcaseIcon />,
    about: <IdentificationIcon />,
    'theme-toggle': (
      <>
        <div className="hidden dark:block">
          <SunIcon />
        </div>
        <div className="block dark:hidden">
          <MoonIcon />
        </div>
      </>
    ),
  }
  return icons[cls] || null
}

export default Cursor
