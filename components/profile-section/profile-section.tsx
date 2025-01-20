import { poppins } from '@/app/fonts'
import { MapPinIcon } from '@heroicons/react/24/solid'
import DownloadButton from '../shared/download-button/download-button'

export default function ProfileSection() {
  return (
    <section className="profile-section w-full max-w-4xl pt-10 pb-24 lg:py-20 px-5">
      <div className="relative -z-20">
        <h1 className={`${poppins.className} text-5xl uppercase`}>
          Tiberiu-Ioan Boșcan
        </h1>
        <p className={`${poppins.className} text-2xl mt-2`}>
          Frontend Developer interested in Computer Vision
        </p>

        <div className="flex items-center mt-10 space-x-2">
          <div className="w-6 text-md text-black dark:text-white">
            <MapPinIcon />
          </div>
          <p>Bucharest, Romania</p>
        </div>

        <p className="mt-4">
          As a frontend developer, I design and build engaging, responsive web
          applications that blend aesthetics with functionality. I have hands-on
          experience with HTML, CSS, JavaScript, and frameworks like Angular and
          React, enabling me to craft dynamic user experiences and scalable
          solutions. I focus on writing clean, efficient code and staying up to
          date with industry trends to deliver high-quality products.
        </p>
        <p className="mt-4">
          In addition to frontend development, I am pursuing a master&apos;s
          degree in Advanced Digital Imaging Techniques (TAID) at the University
          Politehnica of Bucharest, focusing on computer vision and image
          processing. I have a bachelor&apos;s degree in computer science and a
          versatile background spanning frontend, backend, game, and mobile
          development. This diverse experience allows me to adapt to different
          project needs and craft seamless, full-stack solutions.
        </p>
      </div>

      <div className="mt-8">
        <DownloadButton
          title="Download Resume"
          href="Tiberiu-Ioan_Boscan-resume.pdf"
        />
      </div>
    </section>
  )
}
