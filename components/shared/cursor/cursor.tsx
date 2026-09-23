'use client'

import {
  ArchiveBoxIcon,
  ArrowDownTrayIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EnvelopeIcon,
  FunnelIcon,
  IdentificationIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import { gsap } from 'gsap'
import { type JSX, useEffect, useRef, useState } from 'react'
import { GithubIcon, LinkedinIcon, MyLogo } from '../icons'

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

const getCursorIcon = (type: string): JSX.Element | null => {
  switch (type) {
    case 'view':
      return <ArrowUpRightIcon className='w-full h-full' />
    case 'expand':
      return <ChevronDownIcon className='w-full h-full' />
    case 'collapse':
      return <ChevronUpIcon className='w-full h-full' />
    case 'logo':
      return <MyLogo />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      return <LinkedinIcon />
    case 'download':
      return <ArrowDownTrayIcon className='w-full h-full' />
    case 'mail':
      return <EnvelopeIcon className='w-full h-full' />
    case 'filter':
      return <FunnelIcon className='w-full h-full' />
    case 'projects':
      return <ArchiveBoxIcon className='w-full h-full' />
    case 'experience':
      return <BriefcaseIcon className='w-full h-full' />
    case 'about':
      return <IdentificationIcon className='w-full h-full' />
    case 'theme-toggle':
      return (
        <>
          <div className='hidden dark:block w-full h-full'>
            <SunIcon className='w-full h-full' />
          </div>
          <div className='block dark:hidden w-full h-full'>
            <MoonIcon className='w-full h-full' />
          </div>
        </>
      )
    default:
      return null
  }
}

const getCursorTypeFromTarget = (target: HTMLElement | null): string | null => {
  if (!target) return null
  const interactive = target.closest(
    '[data-cursor], a, button',
  ) as HTMLElement | null
  if (!interactive) return null

  if (interactive.dataset.cursor) {
    return interactive.dataset.cursor
  }

  for (const cls of CURSOR_CLASSES) {
    if (interactive.classList.contains(`cursor-${cls}`)) {
      return cls
    }
  }

  if (interactive.tagName === 'A') return 'view'
  return null
}

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [activeType, setActiveType] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const cursorEl = cursorRef.current
    if (!cursorEl) return

    const xTo = gsap.quickTo(cursorEl, 'x', {
      duration: 0.12,
      ease: 'power3.out',
    })
    const yTo = gsap.quickTo(cursorEl, 'y', {
      duration: 0.12,
      ease: 'power3.out',
    })

    let lastX = 0
    let lastY = 0
    let hasMoved = false

    const updateCursor = (target: HTMLElement | null) => {
      const type = getCursorTypeFromTarget(target)
      setActiveType(type)
      if (type) {
        gsap.to(cursorEl, {
          scale: 2.5,
          duration: 0.2,
          overwrite: 'auto',
        })
      } else {
        gsap.to(cursorEl, {
          scale: 1,
          duration: 0.2,
          overwrite: 'auto',
        })
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      lastX = e.clientX
      lastY = e.clientY

      if (!hasMoved) {
        gsap.set(cursorEl, { x: e.clientX, y: e.clientY })
        gsap.to(cursorEl, { opacity: 1, duration: 0.2 })
        hasMoved = true
      } else {
        xTo(e.clientX)
        yTo(e.clientY)
      }
    }

    const onMouseOver = (e: MouseEvent) => {
      updateCursor(e.target as HTMLElement | null)
    }

    const onMouseOut = (e: MouseEvent) => {
      const nextTarget = e.relatedTarget as HTMLElement | null
      updateCursor(nextTarget)
    }

    const onClick = () => {
      requestAnimationFrame(() => {
        const el = document.elementFromPoint(lastX, lastY) as HTMLElement | null
        updateCursor(el)
      })
    }

    const onMouseEnterWindow = () => {
      if (hasMoved) {
        gsap.to(cursorEl, { opacity: 1, duration: 0.2 })
      }
    }

    const onMouseLeaveWindow = () => {
      gsap.to(cursorEl, { opacity: 0, duration: 0.2 })
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseout', onMouseOut, { passive: true })
    document.addEventListener('click', onClick, { passive: true })
    document.addEventListener('mouseenter', onMouseEnterWindow, {
      passive: true,
    })
    document.addEventListener('mouseleave', onMouseLeaveWindow, {
      passive: true,
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('click', onClick)
      document.removeEventListener('mouseenter', onMouseEnterWindow)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
    }
  }, [])

  return (
    <div
      id='custom-cursor'
      ref={cursorRef}
      aria-hidden='true'
      className='custom-cursor text-white tracking-wide font-semibold'
    >
      {activeType && (
        <div className='w-3.5 h-3.5 flex items-center justify-center pointer-events-none'>
          {getCursorIcon(activeType)}
        </div>
      )}
    </div>
  )
}
