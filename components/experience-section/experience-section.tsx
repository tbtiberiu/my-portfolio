import ExperienceInfo from '@/types/experience-info'
import ExperienceCard from './experience-card/experience-card'
import { poppins } from '@/app/fonts'

const experiences: ExperienceInfo[] = [
  {
    title: 'Intern Backend Developer',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'July 2025 - Present',
    description:
      'Worked on the backend of a large-scale CFD trading platform for major banks, focusing on end-of-day operations, server synchronization, and market data integration. Collaborated with frontend and senior engineers to maintain smooth data flow and reliable system performance.',
    technologies: ['Java', 'Spring Boot', 'Linux', 'SQL', 'Git'],
  },
  {
    title: 'Intern Frontend Developer',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'February 2025 - July 2025',
    description:
      'Contributed to the Panther frontend team, building and improving React and React Native components for a CFD trading platform. Focused on accessibility, optimizing application flow, and enhancing performance, while consistently delivering on schedule and receiving positive feedback from stakeholders.',
    technologies: ['React', 'React Native', 'TypeScript', 'CSS', 'Git'],
  },
  {
    title: 'UI/UX Designer and WordPress Developer',
    company: 'Upwork · Freelance',
    location: 'Remote',
    dates: 'February 2025 - May 2025',
    description:
      'Designed and built four custom WordPress websites as a freelance UI/UX designer, creating user-focused interfaces in Figma and responsive, feature-rich sites. Delivered modern, client-tailored solutions and received very good feedback for quality and timely delivery.',
    technologies: [
      'Figma',
      'WordPress',
      'HTML',
      'CSS',
      'JavaScript',
      'Elementor',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Waters Corporation',
    location: 'Brasov, Romania (Remote)',
    dates: 'December 2023 - December 2024',
    description:
      'Developed new user stories, fix bugs, create and review pull requests in multiple Angular projects such as the Alliance iS HPLC System Kiosk, Console, and Method Editor apps to meet specific team goals.',
    technologies: ['HTML', 'CSS', 'Typescript', 'Angular', 'Git'],
  },
  {
    title: 'Software Automation Intern',
    company: 'Waters Corporation',
    location: 'Brasov, Romania (Remote)',
    dates: 'December 2022 - December 2023',
    description:
      'Gained strong skills in crafting and maintaining unit tests and BDD scenarios to ensure software quality and functionality. I developed BDD tests, fixed bugs, and refactored a critical part of the logging mechanism in a Python-based internal testing tool.',
    technologies: [
      'Python',
      'Pytest BDD',
      'Git',
      'Selenium WebDriver',
      'Jenkins',
    ],
  },
  {
    title: 'Web Development Apprenticeship',
    company: 'Endava',
    location: 'Brasov, Romania (Hybrid)',
    dates: 'August 2022 - November 2022',
    description:
      'Acquired a solid foundation in React app development, ASP.NET API creation, Azure Cloud hosting, and Agile methodologies. Successfully executed tasks utilizing HTML, CSS, JavaScript, React, and Azure.',
    technologies: [
      'Javascript',
      'React',
      'C#',
      'ASP.NET',
      'Azure Cloud',
      'GitHub Actions',
      'Terraform',
    ],
  },
]

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="lg:pt-24 pb-10 px-5 m-auto max-w-screen-xl md:pr-24"
    >
      <h2
        className={`${poppins.className} text-3xl md:text-4xl font-bold uppercase mb-6`}
      >
        Experience
      </h2>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          experienceInfo={experience}
          defaultOpen={index === 0}
        />
      ))}
    </section>
  )
}

export default ExperienceSection
