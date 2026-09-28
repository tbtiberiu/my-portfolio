import clsx from 'clsx'
import Image from 'next/image'
import type Project from '@/types/project'

interface ProjectCardProps {
  project: Project
  priority?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  priority = false,
}) => {
  return (
    <article className='group flex flex-col justify-between bg-white dark:bg-[#12161a] border border-slate-200 dark:border-gray-800/90 hover:border-primary/50 dark:hover:border-primary/40 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden'>
      {project.image && (
        <div className='relative h-52 md:h-56 overflow-hidden bg-slate-100 dark:bg-gray-800'>
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            priority={priority}
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px'
            className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      )}
      <div className='flex flex-col justify-between p-6 flex-1'>
        <div>
          <div className='flex flex-wrap gap-1.5 mb-3'>
            {project.tags.map((tag, index) => (
              <span
                key={tag}
                className={clsx(
                  'text-xs font-medium px-2.5 py-0.5 rounded-full border',
                  index === 0
                    ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-sky-300 border-primary/25'
                    : 'bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-gray-700/60',
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className='text-lg md:text-xl font-medium mb-2 text-foreground'>
            {project.title}
          </h3>
          <p className='text-sm text-slate-600 dark:text-gray-300 font-normal leading-relaxed'>
            {project.description}
          </p>
        </div>
        <div className='mt-5 pt-3 border-t border-slate-100 dark:border-gray-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
          {project.year && (
            <span className='text-xs font-medium text-slate-500 dark:text-gray-400'>
              {project.year}
            </span>
          )}
          <div className='flex flex-wrap items-center gap-x-4 gap-y-2 sm:ml-auto'>
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
                className='text-xs font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
              >
                {link.label} <span aria-hidden='true'>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
