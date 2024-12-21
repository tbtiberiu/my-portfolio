import type { Metadata } from 'next'
import './globals.scss'
import { lato } from '@/app/fonts'
import Navbar from '@/components/navbar/navbar'
import Background from '@/components/three/spheres'
import SocialLinks from '@/components/social-links/social-links'
import ProfileSection from '@/components/profile-section/profile-section'

export const metadata: Metadata = {
  title: 'Boșcan Tiberiu-Ioan - Portfolio',
  description:
    'I specialize in creating visually appealing and interactive web applications using HTML, CSS, JavaScript, and frameworks like Angular and React. With a strong commitment to coding best practices and staying updated on industry trends, I deliver scalable, high-quality solutions and embrace new challenges.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <Background />
        <div className="w-full">
          <div className="sticky top-0 m-auto max-w-screen-xl items-center z-50">
            <Navbar />
          </div>
          <div className="sticky-socials sticky float-end top-24 mt-44 mx-5 z-50">
            <SocialLinks />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
