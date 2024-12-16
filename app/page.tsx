import ProfileSection from '@/components/profile-section/profile-section'
import ProjectsSection from '@/components/projects-section/projects-section'
import SocialLinks from '@/components/social-links/social-links'

export default function Home() {
  return (
    <main className="w-full max-w-screen-xl">
      <div className="sticky float-end top-24 mt-44 mr-2 z-50">
        <SocialLinks />
      </div>
      <div>
        <ProfileSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
