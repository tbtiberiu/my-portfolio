'use client'

import { useState } from 'react'
import { poppins } from '@/app/fonts'
import { projectCategories, projects } from '@/data/projects'
import ProjectCard from './project-card/project-card'

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        )

  return (
    <section
      id='projects'
      className='lg:pt-24 pb-24 px-5 m-auto max-w-screen-xl scroll-mt-24'
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
    </section>
  )
}
