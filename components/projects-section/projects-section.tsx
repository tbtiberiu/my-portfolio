'use client'

import { poppins } from '@/app/fonts'
import { useState } from 'react'
import Project from '@/types/project'
import ProjectCard from './project-card/project-card'

const projects: Project[] = [
  {
    title: 'Nova Cars - Futuristic Cars Dealership',
    description:
      'Nova App is a concept website showcasing futuristic cars, developed with Node.js, Express, Handlebars, and MySQL. It features user authentication, dynamic content, and database integration. Deployed on Heroku, the app allows users to register, log in, and explore concept vehicles. Created as part of a Web Application Development course, the project earned a perfect score and includes independently explored features like server setup and deployment.',
    tags: ['Web Development', 'Handlebars · CSS · Node.js · MySQL'],
    categories: ['Web Development'],
    year: '2024',
    image: '/images/nova-app.png',
    github: 'https://github.com/tbtiberiu/nova-app',
  },
  {
    title: 'Chess Snapshot - Chess Recognition',
    description:
      'Chess Snapshot is an innovative computer vision project that automates the recognition of chessboard states from images. By using advanced image processing techniques and machine learning, it accurately identifies the positions of pieces on a chessboard, making it easy for chess enthusiasts to document and analyze games without manual input.',
    tags: ['Computer Vision', 'Python · OpenCV · TensorFlow · Flutter'],
    categories: ['Computer Vision'],
    year: '2024',
    image: '/images/chess-snapshot.png',
    github: 'https://github.com/tbtiberiu/chess_snapshot_app',
  },
  {
    title: 'Acme Shop - E-commerce Website Template',
    description:
      "Acme Shop is a dynamic e-commerce website template built with ReactJS and Redux, inspired by Webflow's Biznus Template. It features product listings, efficient state management, and smooth navigation with React Router. Easily customizable and perfect for online stores, the project is simple to set up and run locally.",
    tags: ['Web Development', 'HTML · CSS · React.js'],
    categories: ['Web Development'],
    year: '2022',
    image: '/images/acme-shop.png',
    github: 'https://github.com/tbtiberiu/acme-shop',
  },
  {
    title: 'John Doe Mountain - Birds Photo Gallery',
    description:
      'John Doe Mountain Birds Photo Gallery is a web-based showcase of stunning images captured by the fictional photographer, John Doe. This project was designed using Adobe XD and implemented using HTML and Sass.',
    tags: ['Web Development', 'HTML · CSS · Adobe XD'],
    categories: ['Web Development'],
    year: '2019',
    image: '/images/john-doe-gallery.png',
    github: 'https://github.com/tbtiberiu/John-Doe-Photo-Gallery',
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
    <section
      id="projects"
      className="lg:pt-24 pb-24 px-5 m-auto max-w-screen-xl"
    >
      <h2
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase mb-4`}
      >
        Projects
      </h2>

      <div className="flex md:items-center mb-8 text-xs md:text-lg flex-col md:flex-row">
        <p className="pb-2 md:pb-0 md:font-normal hidden md:inline">
          Filter by <span className="px-2">&#8226;</span>{' '}
        </p>
        <div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-filter mr-2 md:mr-0 md:ml-2 px-2 md:px-4 py-1 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'hover:bg-secondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}
