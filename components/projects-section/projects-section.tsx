'use client'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { poppins } from '@/app/fonts'
import { moreProjects, projectCategories, projects } from '@/data/projects'
import ProjectCard from './project-card/project-card'

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [moreProjectsOpen, setMoreProjectsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        )
  const filteredMoreProjects =
    selectedCategory === 'All'
      ? moreProjects
      : moreProjects.filter((project) =>
          project.categories.includes(selectedCategory),
        )

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    if (isFirstRender.current) {
      isFirstRender.current = false
      gsap.set(el, { height: 0, opacity: 0 })
      return
    }

    if (moreProjectsOpen) {
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
  }, [moreProjectsOpen])

  const handleToggle = () => {
    setMoreProjectsOpen((prev) => !prev)
  }

  return (
    <section
      id='projects'
      className='lg:pt-24 pb-24 px-5 m-auto max-w-screen-xl md:pr-24 scroll-mt-24'
    >
      <div className='flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4'>
        <div>
          <h2
            className={`${poppins.className} text-3xl md:text-4xl uppercase font-light tracking-wide text-foreground`}
          >
            Projects
          </h2>
        </div>

        <div className='inline-flex items-center p-1 rounded-full bg-gray-200/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-300/40 dark:border-gray-700/50 self-start sm:self-auto overflow-x-auto max-w-full'>
          {projectCategories.map((category) => (
            <button
              type='button'
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              data-cursor='filter'
              className={`cursor-pointer px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>

      {filteredMoreProjects.length > 0 && (
        <div
          ref={containerRef}
          className='w-full mt-8 rounded-2xl border border-slate-200 dark:border-gray-800/90 bg-white/80 dark:bg-[#12161a] backdrop-blur-sm shadow-sm overflow-hidden transition-colors duration-300'
        >
          <button
            type='button'
            onClick={handleToggle}
            aria-expanded={moreProjectsOpen}
            aria-controls='more-projects-list'
            data-cursor={moreProjectsOpen ? 'collapse' : 'expand'}
            className={`cursor-pointer w-full px-5 py-4 sm:px-6 sm:py-5 flex justify-between items-center gap-4 transition-all duration-300 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              moreProjectsOpen
                ? 'bg-slate-50/80 dark:bg-gray-800/50 text-foreground'
                : 'bg-transparent text-foreground hover:bg-slate-50/60 dark:hover:bg-gray-800/40'
            }`}
          >
            <span>
              <span className='block font-semibold text-foreground'>
                More projects ({filteredMoreProjects.length})
              </span>
              <span className='mt-1 block text-sm text-slate-600 dark:text-gray-400'>
                Earlier work and additional projects
              </span>
            </span>
            <span className='flex shrink-0 items-center text-primary'>
              <span
                className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 text-slate-400 dark:text-gray-400 ${
                  moreProjectsOpen ? 'rotate-180' : ''
                }`}
                aria-hidden='true'
              >
                <ChevronDownIcon />
              </span>
            </span>
          </button>

          <div
            id='more-projects-list'
            ref={contentRef}
            className='w-full overflow-hidden'
            style={{ height: 0, opacity: 0 }}
          >
            <div className='w-full p-5 sm:p-6 grid gap-4 sm:grid-cols-2'>
              {filteredMoreProjects.map((project) => (
                <article
                  key={project.title}
                  className='rounded-xl border border-slate-200 dark:border-gray-800/90 bg-slate-50/50 dark:bg-gray-900/60 hover:border-primary/40 dark:hover:border-primary/40 p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-sm'
                >
                  <div>
                    <div className='flex items-start justify-between gap-4'>
                      <h3 className='font-semibold text-foreground text-base'>
                        {project.title}
                      </h3>
                      {project.year && (
                        <span className='shrink-0 text-xs font-medium text-slate-500 dark:text-gray-400'>
                          {project.year}
                        </span>
                      )}
                    </div>
                    <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-300 font-normal'>
                      {project.description}
                    </p>
                    <p className='mt-2.5 text-xs text-slate-500 dark:text-gray-400'>
                      {project.tags.join(' · ')}
                    </p>
                  </div>
                  <div className='mt-4 pt-3 border-t border-slate-200/60 dark:border-gray-800/60 flex flex-wrap items-center gap-x-4 gap-y-2'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`View ${project.title} source code on GitHub`}
                      data-cursor='view'
                      className='text-xs font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                    >
                      Source code <span aria-hidden='true'>↗</span>
                    </a>
                    {project.links?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`${project.title}: ${link.label}`}
                        data-cursor='view'
                        className='text-xs font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                      >
                        {link.label} <span aria-hidden='true'>↗</span>
                      </a>
                    ))}
                  </div>
                </article>
              ))}

              <div className='sm:col-span-2 pt-2 flex justify-center'>
                <button
                  type='button'
                  onClick={handleToggle}
                  data-cursor='collapse'
                  className='cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary py-1.5 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800/80 transition-colors'
                >
                  <span>Show fewer projects</span>
                  <ChevronUpIcon className='w-4 h-4' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
