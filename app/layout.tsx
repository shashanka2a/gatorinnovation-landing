import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GatorInnovation - Build your MVP fast',
  description: 'Landing pages in 2 days or full apps in 1 week. Simple scope, great UX. Trusted by 50+ student entrepreneurs at University of Florida.',
  keywords: ['MVP', 'landing page', 'web development', 'startup', 'University of Florida', 'student entrepreneurs'],
  authors: [{ name: 'GatorInnovation' }],
  creator: 'GatorInnovation',
  publisher: 'GatorInnovation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gatorinnovation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GatorInnovation - Build your MVP fast',
    description: 'Landing pages in 2 days or full apps in 1 week. Simple scope, great UX.',
    url: 'https://gatorinnovation.com',
    siteName: 'GatorInnovation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GatorInnovation - Build your MVP fast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GatorInnovation - Build your MVP fast',
    description: 'Landing pages in 2 days or full apps in 1 week. Simple scope, great UX.',
    images: ['/og-image.jpg'],
    creator: '@gatorinnovation',
    site: '@gatorinnovation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
