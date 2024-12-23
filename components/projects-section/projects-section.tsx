'use client'

import { poppins } from '@/app/fonts'
import { useState } from 'react'
import Project from '@/types/project'
import ProjectCard from './project-card/project-card'

const projects: Project[] = [
  {
    title: 'Nova Cars - Future Cars Dealership',
    description:
      "I'm a UX/UI and Product Designer with 5+ years of experience in creating and scaling user-centric designs for over 48 million users.",
    tags: ['Web Development', 'Handlebars · CSS · Node.js · MySQL'],
    categories: ['Web Development'],
    year: '2024',
    image: '/images/nova-app.png',
  },
  {
    title: 'John Doe Mountain Birds Photo Gallery',
    description:
      "I'm a UX/UI and Product Designer with 5+ years of experience in creating and scaling user-centric designs for over 48 million users.",
    tags: ['Web Development', 'HTML · CSS · Adobe XD'],
    categories: ['Web Development'],
    year: '2019',
    image: '/images/john-doe-gallery.png',
  },
  {
    title: 'Chess Snapshot - Chess Recognition',
    description:
      'This project explores image processing using Python and TensorFlow to analyze chess positions and identify the current state of a chess game.',
    tags: ['Computer Vision', 'Python · OpenCV · TensorFlow · Flutter'],
    categories: ['Computer Vision'],
    year: '2019',
    image: '/images/chess-snapshot.png',
  },
  {
    title: 'Acme Shop - Lorem Ipsum',
    description:
      'COVID-19 has forced us to close our retail space, but we need support from patrons like yourself more than ever.',
    tags: ['Web Development', 'HTML · CSS · React.js'],
    categories: ['Web Development'],
    year: '2024',
    image: '/images/acme-shop.png',
  },
]

const categories = ['All', 'Web Development', 'Computer Vision']

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        )

  return (
    <section id="projects" className="py-10 px-5 m-auto max-w-screen-xl">
      <h2
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase mb-6`}
      >
        Projects
      </h2>

      <div className="flex items-center mb-8 text-xl">
        <p>
          Filter by <span className="px-2">&#8226;</span>{' '}
        </p>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mr-4 px-4 py-1 rounded-full transition-colors duration-300 ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'cursor-pointer hover:bg-secondary hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}
