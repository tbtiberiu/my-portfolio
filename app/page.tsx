import ProfileSection from '@/components/profile-section/profile-section'
import ProjectsSection from '@/components/projects-section/projects-section'
import SocialLinks from '@/components/social-links/social-links'

export default function Home() {
  return (
    <div>
      <div className="sticky flex justify-end top-24 mt-44 mr-2 z-50">
        <SocialLinks />
      </div>
      <main className="w-full max-w-screen-xl flex flex-col -mt-80">
        <div className="w-full big-height top-24">
          <div>
            <ProfileSection />
          </div>
        </div>
        <br />
        <div className="w-full big-height">
          <ProjectsSection />
        </div>
      </main>
    </div>
  )
}
