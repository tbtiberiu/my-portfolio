import ExperienceInfo from '@/types/experience-info'
import ExperienceCard from './experience-card/experience-card'
import { poppins } from '@/app/fonts'

const experiences: ExperienceInfo[] = [
  {
    title: 'Junior Frontend Developer',
    company: 'Waters Corporation',
    location: 'Brasov, Romania (Remote)',
    dates: 'December 2023 - Present',
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
      className="lg:pt-24 pb-10 px-5 m-auto max-w-screen-xl"
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
