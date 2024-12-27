import AboutSection from '@/components/about-section/about-section'
import ExperienceSection from '@/components/experience-section/experience-section'
import ProfileSection from '@/components/profile-section/profile-section'
import ProjectsSection from '@/components/projects-section/projects-section'
import SingleSphere from '@/components/three/single-sphere'
import SpheresLine from '@/components/three/spheres-line'

export default function Home() {
  return (
    <main className="relative">
      <ProfileSection />
      <ProjectsSection />
      <div className="relative">
        <SpheresLine />
        <ExperienceSection />
      </div>
      <div className="relative">
        <SingleSphere />
        <AboutSection />
      </div>
    </main>
  )
}
