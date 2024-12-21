import React from 'react'
import Image from 'next/image'
import Project from '@/types/project'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-gray-900 border-2 border-primary dark:border-0 rounded-lg overflow-hidden shadow-lg hover:shadow-primary hover:shadow-sm transition-transform transform hover:-translate-y-2">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={500}
        className="w-full object-cover"
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm bg-transparent text-black dark:text-white border-2 border-black dark:border-white px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-sm">{project.description}</p>
        <span className="block mt-4 text-gray-600 dark:text-gray-400 text-sm">
          {project.year}
        </span>
      </div>
    </div>
  )
}

export default ProjectCard
