import { poppins } from '@/app/fonts'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import LinkButton from '../shared/link-button/link-button'

export default function ProfileSection() {
  return (
    <section className="profile-section w-full max-w-4xl py-24 px-5">
      <div className="relative -z-20">
        <h1 className={`${poppins.className} text-5xl uppercase`}>
          Boșcan Tiberiu-Ioan
        </h1>
        <p className={`${poppins.className} text-2xl mt-2`}>
          Frontend Developer interested in Computer Vision
        </p>

        <div className="flex items-center mt-10 space-x-2">
          <div className="w-6 text-black dark:text-white">
            <MapPinIcon />
          </div>
          <p>Bucharest, Romania</p>
        </div>

        <p className="mt-4">
          As a frontend developer, I specialize in crafting engaging, responsive
          web applications. My expertise in HTML, CSS, JavaScript, and
          frameworks like Angular and React enables me to build dynamic and
          user-friendly interfaces.
        </p>
        <p className="mt-4">
          I&apos;m passionate about merging aesthetics with functionality to
          create projects that are both visually appealing and high-performing.
          My strong problem-solving skills and understanding of coding best
          practices, grounded in my computer science background, drive me to
          deliver high-quality, scalable solutions.
        </p>
      </div>

      <div className="mt-8">
        <LinkButton
          href="Tiberiu-Ioan_Boscan-resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Download Resume</p>
          <div className="w-6">
            <ArrowDownTrayIcon />
          </div>
        </LinkButton>
      </div>
    </section>
  )
}
