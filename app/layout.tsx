import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AmrAstha (আমার আস্থা) - Portable Trust for People & Small Businesses',
    template: '%s | AmrAstha'
  },
  description: 'AmrAstha helps buyers verify sellers/workers/tutors and helps honest sellers/workers build trust that follows them everywhere. Portable trust infrastructure for Bangladesh.',
  keywords: ['trust', 'verification', 'Bangladesh', 'small business', 'reputation', 'safety', 'fraud prevention'],
  authors: [{ name: 'AmrAstha Team' }],
  creator: 'AmrAstha',
  metadataBase: new URL('https://amrastha.com'),
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: 'https://amrastha.com',
    title: 'AmrAstha (আমার আস্থা) - Portable Trust for People & Small Businesses',
    description: 'Build and verify trust in Bangladesh. Portable reputation layer for buyers and sellers.',
    siteName: 'AmrAstha',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'AmrAstha Trust Platform'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmrAstha - Portable Trust Platform',
    description: 'Build verified trust that follows you everywhere in Bangladesh',
    images: ['/twitter-image.png']
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
    google: 'google-site-verification-code'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}