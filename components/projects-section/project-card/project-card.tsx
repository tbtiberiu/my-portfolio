import Image from 'next/image'
import Project from '@/types/project'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-view bg-white dark:bg-gray-900 dark:border-transparent border-2 border-primary rounded-lg shadow-lg hover:shadow-primary hover:shadow-sm transition-transform transform hover:-translate-y-2"
    >
      <div className="relative h-48 md:h-52">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-between p-6">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs md:text-sm bg-transparent text-black dark:text-white border-2 border-black dark:border-white px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
          <p className="text-xs md:text-sm">{project.description}</p>
        </div>
        <span className="block mt-4 text-gray-600 dark:text-gray-400 text-sm">
          {project.year}
        </span>
      </div>
    </Link>
  )
}

export default ProjectCard
