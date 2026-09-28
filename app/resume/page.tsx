import type { Metadata } from 'next'
import Link from 'next/link'
import { poppins } from '@/app/fonts'
import DownloadButton from '@/components/shared/download-button/download-button'
import { experiences } from '@/data/experiences'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Resume | Tiberiu-Ioan Boșcan',
  description:
    'Resume of Tiberiu-Ioan Boșcan, software developer in Bucharest, Romania. Experience in Java, Spring Boot, React, TypeScript, AI, and computer vision.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Resume | Tiberiu-Ioan Boșcan',
    description:
      'Software developer experienced in enterprise applications, full-stack development, and computer vision.',
    url: '/resume',
    type: 'profile',
  },
}

const skillGroups = [
  {
    name: 'Languages',
    skills: [
      'Java',
      'TypeScript',
      'JavaScript',
      'C#',
      'Python',
      'SQL',
      'HTML',
      'CSS/Sass',
    ],
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Angular',
      'React Native',
      'Flutter',
      'Tailwind CSS',
      'Figma',
    ],
  },
  {
    name: 'Backend and APIs',
    skills: [
      'Spring Boot',
      'Spring Framework',
      'ASP.NET Core',
      'Node.js',
      'Express',
      'Flask',
      'REST APIs',
    ],
  },
  {
    name: 'Cloud and DevOps',
    skills: [
      'Microsoft Azure',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
      'Git',
      'Linux',
    ],
  },
  {
    name: 'Data and AI',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'PyTorch',
      'OpenCV',
      'Vision Transformers',
      'LoRA',
      'YOLOv8',
    ],
  },
]

const education = [
  {
    degree: 'M.Sc. in Advanced Techniques in Digital Imaging',
    school: 'Politehnica University of Bucharest',
    dates: 'October 2024 – June 2026',
    details:
      'Focus: machine learning, computer vision, deep learning, and digital image processing. Thesis: DeForge-AI, universal deepfake detection. Final grade: 10/10.',
  },
  {
    degree: 'B.Sc. in Computer Science',
    school: 'Transilvania University of Brașov',
    dates: 'October 2021 – July 2024',
    details:
      'Focus: algorithms, data structures, software engineering, and distributed systems. Capstone: Chess Snapshot, a computer vision chessboard digitizer. Final grade: 9.75/10.',
  },
]

const selectedProjectTitles = [
  'DeForge-AI - AI-Generated Image Detector',
  "Dedal's Labyrinth - Maze Generator & Solver",
  'Chess Snapshot - Chess Recognition & Analyzer',
]
const selectedProjects = selectedProjectTitles
  .map((title) => projects.find((project) => project.title === title))
  .filter((project) => project !== undefined)

const cardClass =
  'rounded-2xl border border-slate-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
const sectionHeadingClass = `${poppins.className} mb-5 text-xl sm:text-2xl uppercase font-light tracking-wide text-foreground`

export default function ResumePage() {
  return (
    <main className='relative z-10 mx-auto w-full max-w-5xl px-5 pb-20 pt-10 sm:pt-14 overflow-x-clip'>
      <header className={`${cardClass} mb-6 p-6 sm:p-9`}>
        <p className='mb-2 text-sm uppercase tracking-[0.2em] text-primary'>
          Resume
        </p>
        <h1
          className={`${poppins.className} text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-foreground`}
        >
          Tiberiu-Ioan Boșcan
        </h1>
        <p className='mt-2 text-lg sm:text-xl text-slate-700 dark:text-gray-300'>
          Software Developer
        </p>

        <div className='mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-gray-400'>
          <span>Bucharest, Romania</span>
          <a
            className='hover:text-primary'
            href='mailto:tiberiuioan35@gmail.com'
          >
            tiberiuioan35@gmail.com
          </a>
          <a
            className='hover:text-primary'
            href='https://www.linkedin.com/in/tbtiberiu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a
            className='hover:text-primary'
            href='https://github.com/tbtiberiu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </div>

        <p className='mt-6 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-700 dark:text-gray-300'>
          Software Developer with 3+ years of experience building software for
          financial trading and analytical instrumentation. My core stack is
          Java and Spring Boot alongside React and TypeScript, with additional
          experience in test automation, CI/CD, and computer vision.
        </p>

        <div className='mt-6 flex flex-wrap items-center gap-3'>
          <DownloadButton
            title='Download PDF'
            href='/Tiberiu-Ioan_Boscan_resume.pdf'
          />
          <Link
            href='/#projects'
            className='px-5 py-3 text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-primary transition-colors'
          >
            View portfolio projects
          </Link>
        </div>
      </header>

      <section
        className={`${cardClass} mb-6 p-6 sm:p-8`}
        aria-labelledby='skills'
      >
        <h2 id='skills' className={sectionHeadingClass}>
          Technical Skills
        </h2>
        <div className='space-y-4'>
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className='grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-5'
            >
              <h3 className='text-sm font-semibold text-slate-800 dark:text-gray-200'>
                {group.name}
              </h3>
              <ul className='flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className='rounded-full border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800 px-3 py-1 text-xs sm:text-sm text-slate-700 dark:text-gray-300'
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${cardClass} mb-6 p-6 sm:p-8`}
        aria-labelledby='experience'
      >
        <h2 id='experience' className={sectionHeadingClass}>
          Work Experience
        </h2>
        <div className='space-y-6'>
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.title}`}
              className='border-l-2 border-primary/50 pl-4 sm:pl-5'
            >
              <div className='flex flex-col justify-between gap-1 sm:flex-row sm:gap-4'>
                <div>
                  <h3 className='font-semibold text-slate-900 dark:text-white'>
                    {experience.title}
                  </h3>
                  <p className='text-sm text-slate-600 dark:text-gray-300'>
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <p className='shrink-0 text-sm text-slate-500 dark:text-gray-400'>
                  {experience.dates}
                </p>
              </div>
              <p className='mt-2 text-sm leading-relaxed text-slate-700 dark:text-gray-300'>
                {experience.description}
              </p>
              {experience.highlights && experience.highlights.length > 0 && (
                <ul className='mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-600 dark:text-gray-400'>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${cardClass} mb-6 p-6 sm:p-8`}
        aria-labelledby='projects'
      >
        <h2 id='projects' className={sectionHeadingClass}>
          Selected Projects
        </h2>
        <div className='space-y-5'>
          {selectedProjects.map((project) => (
            <article key={project.title}>
              <div className='flex flex-col justify-between gap-1 sm:flex-row sm:gap-4'>
                <h3 className='font-semibold text-slate-900 dark:text-white'>
                  {project.title}
                </h3>
                {project.year && (
                  <span className='shrink-0 text-sm text-slate-500 dark:text-gray-400'>
                    {project.year}
                  </span>
                )}
              </div>
              <p className='mt-1 text-sm leading-relaxed text-slate-700 dark:text-gray-300'>
                {project.description}
              </p>
              <p className='mt-2 text-xs text-slate-500 dark:text-gray-400'>
                {project.tags.join(' · ')}
              </p>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 inline-block text-sm font-medium text-primary hover:underline'
              >
                View source on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${cardClass} mb-6 p-6 sm:p-8`}
        aria-labelledby='education'
      >
        <h2 id='education' className={sectionHeadingClass}>
          Education
        </h2>
        <div className='space-y-5'>
          {education.map((item) => (
            <article key={item.degree}>
              <div className='flex flex-col justify-between gap-1 sm:flex-row sm:gap-4'>
                <div>
                  <h3 className='font-semibold text-slate-900 dark:text-white'>
                    {item.degree}
                  </h3>
                  <p className='text-sm text-slate-600 dark:text-gray-300'>
                    {item.school}
                  </p>
                </div>
                <p className='shrink-0 text-sm text-slate-500 dark:text-gray-400'>
                  {item.dates}
                </p>
              </div>
              <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-400'>
                {item.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${cardClass} p-6 sm:p-8`}
        aria-labelledby='additional'
      >
        <h2 id='additional' className={sectionHeadingClass}>
          Additional Information
        </h2>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-white'>
              Certifications
            </h3>
            <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-gray-400'>
              <li>
                IBM Professional Certificate: Databases and SQL for Data Science
                with Python (2025)
              </li>
              <li>Meta Front-End Developer and related certificates (2025)</li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-white'>
              Languages
            </h3>
            <p className='mt-2 text-sm text-slate-600 dark:text-gray-400'>
              Romanian (native); English (full professional proficiency).
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-slate-900 dark:text-white'>
              Awards
            </h3>
            <p className='mt-2 text-sm text-slate-600 dark:text-gray-400'>
              Second place, 24-hour hackathon organized by Politehnica
              University of Bucharest and SIE (2024).
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
