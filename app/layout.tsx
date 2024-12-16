import type { Metadata } from 'next'
import './globals.scss'
import { lato } from '@/app/fonts'
import Navbar from '@/components/navbar/navbar'
import Background from '@/components/three/spheres'
import SocialLinks from '@/components/social-links/social-links'

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
        <div className="flex w-full flex-col items-center [&>*]:max-w-screen-xl">
          <div className="sticky top-0 w-full max-w-screen-xl flex flex-col items-center z-50">
            <Navbar />
          </div>
          <div className="w-full">
            <div className="sticky float-end top-24 mt-44 mr-5 z-50">
              <SocialLinks />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
