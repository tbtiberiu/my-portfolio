import SocialLinks from '@/components/social-links/social-links'

export default function Home() {
  return (
    <main className="w-full max-w-screen-xl">
      <div className="w-9/12 float-left">Content Here</div>
      <div className="sticky float-right top-24 mt-44 mr-2 z-50">
        <SocialLinks />
      </div>
    </main>
  )
}
