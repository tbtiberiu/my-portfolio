import ExperienceSection from '@/components/experience-section/experience-section'
import ProfileSection from '@/components/profile-section/profile-section'
import ProjectsSection from '@/components/projects-section/projects-section'

export default function Home() {
  return (
    <main>
      <ProfileSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  )
}
