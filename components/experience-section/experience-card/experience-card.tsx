'use client'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { useEffect, useId, useRef, useState } from 'react'
import {
  EndavaIcon,
  SocieteGeneraleIcon,
  UpworkIcon,
  WatersIcon,
} from '@/components/shared/icons'
import type ExperienceInfo from '@/types/experience-info'

interface ExperienceCardProps {
  experienceInfo: ExperienceInfo
  defaultOpen?: boolean
}

const renderCompanyLogo = (company: string) => {
  switch (company.toLowerCase().trim()) {
    case 'société générale':
      return <SocieteGeneraleIcon />
    case 'upwork · freelance':
      return <UpworkIcon />
    case 'waters corporation':
      return <WatersIcon />
    case 'endava':
      return <EndavaIcon />
    default:
      return <div className='w-40 h-40 bg-gray-300 rounded-lg' />
  }
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experienceInfo,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)
  const contentId = useId()

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    if (isFirstRender.current) {
      isFirstRender.current = false
      if (!defaultOpen) {
        gsap.set(el, { height: 0, opacity: 0 })
      }
      return
    }

    if (isOpen) {
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: el.scrollHeight,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto',
          onComplete: () => {
            if (contentRef.current) {
              contentRef.current.style.height = 'auto'
            }
          },
        },
      )
    } else {
      gsap.fromTo(
        el,
        { height: el.scrollHeight, opacity: 1 },
        {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          overwrite: 'auto',
        },
      )
    }
  }, [isOpen, defaultOpen])

  return (
    <div className='mb-3 overflow-hidden'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        data-cursor={isOpen ? 'collapse' : 'expand'}
        className={clsx(
          'cursor-pointer w-full overflow-hidden px-6 py-3.5 flex justify-between items-center rounded-xl transition-all ease-in-out duration-300 border',
          isOpen
            ? 'cursor-collapse bg-slate-50 dark:bg-gray-800/90 border-slate-300 dark:border-gray-700 text-slate-900 dark:text-white shadow-sm'
            : 'cursor-expand bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm border-slate-200 dark:border-gray-800 text-slate-900 dark:text-foreground hover:border-slate-300 dark:hover:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800/80',
        )}
      >
        <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-left'>
          <span className='font-medium text-sm md:text-base tracking-wide text-slate-900 dark:text-white'>
            {experienceInfo.title}
          </span>
          <span className='hidden sm:inline text-slate-400 dark:text-gray-400'>
            •
          </span>
          <span className='text-xs sm:text-base font-normal text-slate-600 dark:text-gray-300'>
            {experienceInfo.company}
          </span>
        </div>
        <div
          className={clsx(
            'w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 text-slate-400 dark:text-gray-400',
            isOpen && 'rotate-180',
          )}
          aria-hidden='true'
        >
          <ChevronDownIcon />
        </div>
      </button>
      <div
        id={contentId}
        ref={contentRef}
        className='overflow-hidden'
        style={defaultOpen ? undefined : { height: 0, opacity: 0 }}
      >
        <div className='rounded-xl overflow-hidden bg-white dark:bg-[#12161a] border border-slate-200 dark:border-gray-800/90 shadow-sm mt-1.5'>
          <div className='p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6'>
            <div className='w-full md:w-[70%] flex-1 min-w-0 max-w-3xl'>
              <div className='flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-normal mb-3'>
                <div className='inline-flex items-center gap-1.5'>
                  <MapPinIcon
                    className='w-4 h-4 flex-shrink-0 text-slate-400 dark:text-gray-500'
                    aria-hidden='true'
                  />
                  <span>{experienceInfo.location}</span>
                </div>
                <div className='inline-flex items-center gap-1.5'>
                  <ClockIcon
                    className='w-4 h-4 flex-shrink-0 text-slate-400 dark:text-gray-500'
                    aria-hidden='true'
                  />
                  <span>{experienceInfo.dates}</span>
                </div>
              </div>

              <p className='text-sm sm:text-base mb-3 text-slate-700 dark:text-gray-200 font-normal leading-relaxed'>
                {experienceInfo.description}
              </p>

              {experienceInfo.highlights &&
                experienceInfo.highlights.length > 0 && (
                  <ul className='space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-normal'>
                    {experienceInfo.highlights.map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-2 leading-relaxed'
                      >
                        <ChevronRightIcon
                          className='w-3.5 h-3.5 text-primary/70 dark:text-sky-400/80 mt-1 flex-shrink-0'
                          aria-hidden='true'
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

              <div className='flex flex-wrap gap-1.5'>
                {experienceInfo.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700/60 px-2.5 py-0.5 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='w-full md:w-[30%] flex-shrink-0 flex items-center justify-center self-center py-4 md:py-0'>
              <div className='w-full flex items-center justify-center text-foreground/95 hover:opacity-100 transition-opacity'>
                {renderCompanyLogo(experienceInfo.company)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
