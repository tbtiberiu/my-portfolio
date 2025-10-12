import { MapPinIcon } from '@heroicons/react/24/solid'
import { poppins } from '@/app/fonts'
import DownloadButton from '../shared/download-button/download-button'

export default function ProfileSection() {
  return (
    <section className='profile-section w-full max-w-4xl pt-10 pb-24 lg:py-20 px-5'>
      <div className='relative -z-20'>
        <h1 className={`${poppins.className} text-5xl uppercase`}>
          Tiberiu-Ioan Boșcan
        </h1>
        <p className={`${poppins.className} text-2xl mt-2`}>
          Web Developer with an interest in Computer Vision
        </p>

        <div className='flex items-center mt-10 gap-1'>
          <div className='w-6 text-md text-black dark:text-white'>
            <MapPinIcon />
          </div>
          <p>Bucharest, Romania</p>
        </div>

        <p className='mt-4'>
          As a full-stack developer, I design and build robust, scalable web
          applications that combine seamless functionality with engaging user
          experiences. I have hands-on experience with frontend technologies
          like HTML, CSS, JavaScript, Angular, and React, as well as backend
          development using Java and Spring Boot, enabling me to deliver
          end-to-end solutions. I focus on writing clean, efficient code and
          keeping up with the latest industry trends to build high-quality
          products.
        </p>
        <p className='mt-4'>
          In addition to my professional work, I am pursuing a master&apos;s
          degree in Advanced Digital Imaging Techniques (TAID) at the University
          Politehnica of Bucharest, specializing in computer vision and image
          processing. I hold a bachelor&apos;s degree in computer science and
          have a versatile background spanning frontend, backend, game, and
          mobile development, which allows me to adapt quickly to diverse
          project requirements.
        </p>
      </div>

      <div className='mt-8'>
        <DownloadButton
          title='Download Resume'
          href='Tiberiu-Ioan_Boscan_resume.pdf'
        />
      </div>
    </section>
  )
}
