import type { Metadata } from 'next'
import './globals.scss'
import { lato } from '@/app/fonts'
import Navbar from '@/components/navbar/navbar'
import Background from '@/components/three/background'
import SocialLinks from '@/components/social-links/social-links'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Cursor from '@/components/shared/cursor/cursor'

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
        <Cursor />
        <Background />
        <Navbar />
        <SocialLinks />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
