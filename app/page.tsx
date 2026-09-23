import dynamic from 'next/dynamic'
import AboutSection from '@/components/about-section/about-section'
import ExperienceSection from '@/components/experience-section/experience-section'
import ProfileSection from '@/components/profile-section/profile-section'
import ProjectsSection from '@/components/projects-section/projects-section'

const SingleSphere = dynamic(() => import('@/components/three/single-sphere'))
const SpheresLine = dynamic(() => import('@/components/three/spheres-line'))

export default function Home() {
  return (
    <main className='relative'>
      <ProfileSection />
      <ProjectsSection />
      <div className='relative'>
        <SpheresLine />
        <ExperienceSection />
      </div>
      <div className='relative'>
        <SingleSphere />
        <AboutSection />
      </div>
    </main>
  )
}
