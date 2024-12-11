import type { Metadata } from 'next'
import './globals.css'
import { lato } from '@/app/fonts'
import Navbar from '@/components/navbar/navbar'

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
        <div className="flex h-screen flex-col">
          <div className="fixed w-full top-0 z-50 bg-transparent">
            <Navbar />
          </div>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
