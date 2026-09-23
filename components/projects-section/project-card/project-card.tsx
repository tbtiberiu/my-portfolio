import Image from 'next/image'
import Link from 'next/link'
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
    <Link
      href={project.github}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`View ${project.title} project on GitHub`}
      data-cursor='view'
      className='group flex flex-col justify-between bg-white/95 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-800 hover:border-primary/60 dark:hover:border-primary/50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden backdrop-blur-sm'
    >
      <div className='relative h-52 md:h-56 overflow-hidden bg-slate-100 dark:bg-gray-800'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px'
          className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
        />
      </div>
      <div className='flex flex-col justify-between p-6 flex-1'>
        <div>
          <div className='flex flex-wrap gap-1.5 mb-3'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='text-xs font-medium bg-primary/10 text-primary dark:bg-primary/15 border border-primary/20 px-2.5 py-0.5 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className='text-lg md:text-xl font-normal mb-2 text-foreground group-hover:text-primary transition-colors'>
            {project.title}
          </h3>
          <p className='text-sm text-slate-700 dark:text-gray-300 font-light leading-relaxed'>
            {project.description}
          </p>
        </div>
        <div className='mt-5 pt-3 border-t border-slate-100 dark:border-gray-800/80 flex items-center justify-between'>
          <span className='text-xs font-medium text-slate-600 dark:text-gray-400'>
            {project.year}
          </span>
          <span className='text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            View Repository
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
