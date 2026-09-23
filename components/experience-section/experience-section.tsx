import { poppins } from '@/app/fonts'
import { experiences } from '@/data/experiences'
import ExperienceCard from './experience-card/experience-card'

const ExperienceSection: React.FC = () => {
  return (
    <section
      id='experience'
      className='lg:pt-24 pb-16 px-5 m-auto max-w-screen-xl md:pr-24 scroll-mt-24'
    >
      <div className='mb-6'>
        <h2
          className={`${poppins.className} text-3xl md:text-4xl uppercase font-light tracking-wide text-foreground`}
        >
          Experience
        </h2>
      </div>
      <div className='space-y-3'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.title}`}
            experienceInfo={experience}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
