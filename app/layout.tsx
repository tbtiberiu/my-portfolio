import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { nunito } from '@/app/fonts'
import Navbar from '@/components/navbar/navbar'
import Cursor from '@/components/shared/cursor/cursor'
import SocialLinks from '@/components/social-links/social-links'
import Background from '@/components/three/background'

import './globals.css'

export const metadata: Metadata = {
  title: 'Tiberiu-Ioan Boșcan - Portfolio',
  description:
    'Experienced Web Developer specializing in modern web technologies like React, Angular, and TypeScript on the frontend side, and Java with Spring Boot on backend. Passionate about building interactive, scalable, and high-performance web applications.',
  authors: [
    { name: 'Tiberiu-Ioan Boșcan', url: 'https://boscantiberiu.vercel.app' },
  ],
  creator: 'Tiberiu-Ioan Boșcan',
  publisher: 'Tiberiu-Ioan Boșcan',
  robots: 'index, follow',
  openGraph: {
    title: 'Tiberiu-Ioan Boșcan - Portfolio',
    description:
      'Experienced Web Developer specializing in React, TypeScript, Java and Spring Boot. Passionate about building high-performance web applications.',
    url: 'https://boscantiberiu.vercel.app',
    siteName: 'Tiberiu-Ioan Boșcan Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://boscantiberiu.vercel.app/og-icon.png',
        width: 1500,
        height: 1500,
        alt: 'Tiberiu-Ioan Boșcan Portfolio Icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiberiu-Ioan Boșcan - Portfolio',
    description:
      'Web Developer skilled in React, TypeScript, Java and Spring Boot. Building high-performance, scalable applications.',
    images: ['https://boscantiberiu.vercel.app/og-icon.png'],
    creator: '@tiberiuboscan',
  },
  alternates: {
    canonical: 'https://boscantiberiu.vercel.app',
  },
  metadataBase: new URL('https://boscantiberiu.vercel.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} antialiased`}>
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
