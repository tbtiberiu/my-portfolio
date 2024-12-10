import type { Metadata } from 'next';
import './globals.css';
import { lato } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Boșcan Tiberiu-Ioan - Portfolio',
  description:
    'I specialize in creating visually appealing and interactive web applications using HTML, CSS, JavaScript, and frameworks like Angular and React. With a strong commitment to coding best practices and staying updated on industry trends, I deliver scalable, high-quality solutions and embrace new challenges.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
