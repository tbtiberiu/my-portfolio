import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { nunito } from '@/app/fonts'
import Navbar from '@/components/navbar/navbar'
import Cursor from '@/components/shared/cursor/cursor'
import SocialLinks from '@/components/social-links/social-links'

const Background = dynamic(() => import('@/components/three/background'))

import './globals.css'

export const metadata: Metadata = {
  title: 'Tiberiu-Ioan Boșcan - Software Developer Portfolio',
  description:
    'Software Developer with 3+ years of experience building financial trading and analytical software with Java, Spring Boot, React, and TypeScript.',
  keywords: [
    'Tiberiu-Ioan Boșcan',
    'Software Developer',
    'Société Générale',
    'React',
    'TypeScript',
    'Java',
    'Spring Boot',
    'Game Development',
    'Machine Learning',
    'Next.js',
    'Portfolio',
  ],
  authors: [
    { name: 'Tiberiu-Ioan Boșcan', url: 'https://boscantiberiu.vercel.app' },
  ],
  creator: 'Tiberiu-Ioan Boșcan',
  publisher: 'Tiberiu-Ioan Boșcan',
  robots: 'index, follow',
  openGraph: {
    title: 'Tiberiu-Ioan Boșcan - Portfolio',
    description:
      'Software Developer with 3+ years of experience in Java, Spring Boot, React, TypeScript, test automation, and computer vision.',
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
      'Software Developer with 3+ years of experience in Java, Spring Boot, React, and TypeScript.',
    images: ['https://boscantiberiu.vercel.app/og-icon.png'],
    creator: '@tbtiberiu',
  },
  alternates: {
    canonical: 'https://boscantiberiu.vercel.app',
  },
  metadataBase: new URL('https://boscantiberiu.vercel.app'),
}

import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Cursor />
          <Background />
          <Navbar />
          <SocialLinks />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
