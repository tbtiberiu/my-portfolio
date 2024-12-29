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
      'Developed and updated workflows for Angular projects such as the Alliance iS HPLC System Kiosk, Console, and Method Editor apps. I contributed by building new features and improving existing ones, collaborating closely with designers and backend developers to ensure a seamless user experience. Additionally, I fixed bugs, optimized application performance, and participated in team meetings, code reviews, and planning sessions to keep projects aligned with goals and deliver high-quality solutions.',
    technologies: ['HTML', 'CSS', 'Typescript', 'Angular', 'Git'],
  },
  {
    title: 'Software Automation Intern',
    company: 'Waters Corporation',
    location: 'Brasov, Romania (Remote)',
    dates: 'December 2022 - December 2023',
    description:
      'Gained strong skills in crafting and maintaining unit tests and BDD scenarios to ensure software quality and functionality. I developed BDD tests, fixed bugs, and refactored a critical part of the logging mechanism in a Python-based internal testing tool. Throughout, I documented my work clearly through code comments, README files, and Confluence, while effectively communicating progress to the team.',
    technologies: [
      'Python',
      'Pytest BDD',
      'Git',
      'Selenium WebDriver',
      'SpecFlow',
      'Jenkins',
    ],
  },
  {
    title: 'Web Development Apprenticeship',
    company: 'Endava',
    location: 'Brasov, Romania (Hybrid)',
    dates: 'August 2022 - November 2022',
    description:
      "After completing a two month training program in Javascript, React, ASP.NET, and Azure Cloud, I successfully completed all assigned tasks involving these technologies. Building on this foundation, I played a key role as the main DevOps engineer in the development of a Recipe Keeper app, where I managed the deployment of frontend and backend components and set up CI/CD pipelines to ensure smooth and efficient delivery. This project allowed me to apply and expand my skills in cloud services and full-stack development, contributing significantly to the app's success.",
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
