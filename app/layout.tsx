import type { Metadata } from 'next'
import './globals.scss'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { nunito } from '@/app/fonts'
import Navbar from '@/components/navbar/navbar'
import Cursor from '@/components/shared/cursor/cursor'
import SocialLinks from '@/components/social-links/social-links'
import Background from '@/components/three/background'

export const metadata: Metadata = {
  title: 'Tiberiu-Ioan Boșcan - Portfolio',
  description:
    'Experienced Frontend Developer specializing in modern web technologies like React, Angular, and TypeScript. Passionate about building interactive, scalable, and high-performance web applications.',
  authors: [
    { name: 'Tiberiu-Ioan Boșcan', url: 'https://boscantiberiu.vercel.app' },
  ],
  creator: 'Tiberiu-Ioan Boșcan',
  publisher: 'Tiberiu-Ioan Boșcan',
  robots: 'index, follow',
  openGraph: {
    title: 'Tiberiu-Ioan Boșcan - Portfolio',
    description:
      'Experienced Frontend Developer specializing in React, Angular, and TypeScript. Passionate about building high-performance web applications.',
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
      'Frontend Developer skilled in React, Angular, and TypeScript. Building high-performance, scalable applications.',
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
