import { poppins } from '@/app/fonts'
import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Nova Cars - Future Cars Dealership',
    description:
      "I'm a UX/UI and Product Designer with 5+ years of experience in creating and scaling user-centric designs for over 48 million users.",
    tags: ['Web Development', 'Handlebars · CSS · Node.js · MySQL'],
    year: '2024',
    image: '/images/nova-app.png',
  },
  {
    title: 'John Doe Mountain Birds Photo Gallery',
    description:
      "I'm a UX/UI and Product Designer with 5+ years of experience in creating and scaling user-centric designs for over 48 million users.",
    tags: ['Web Development', 'HTML · CSS · Adobe XD'],
    year: '2019',
    image: '/images/john-doe-gallery.png',
  },
  {
    title: 'Chess Snapshot - Chess Recognition',
    description:
      'This project explores image processing using Python and TensorFlow to analyze chess positions and identify the current state of a chess game.',
    tags: ['Computer Vision', 'Python · OpenCV · TensorFlow · Flutter'],
    year: '2019',
    image: '/images/chess-snapshot.png',
  },
  {
    title: 'Acme Shop - Lorem Ipsum',
    description:
      'COVID-19 has forced us to close our retail space, but we need support from patrons like yourself more than ever.',
    tags: ['Web Development', 'HTML · CSS · React.js'],
    year: '2024',
    image: '/images/acme-shop.png',
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-10 px-5">
      <h1
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase mb-6`}
      >
        Projects
      </h1>

      <p className="text-lg mb-8">
        Filter by &#8226;{' '}
        <span>
          <strong className="text-primary">All</strong>
          {' / '}
          <strong>Web Development</strong>
          {' / '}
          <strong>Computer Vision</strong>
        </span>
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white dark:bg-gray-900 border-2 border-primary dark:border-0 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
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
        ))}
      </div>
    </section>
  )
}
