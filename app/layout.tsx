import type { Metadata } from 'next'
import './globals.css'
import Header from 'components/Header'

export const metadata: Metadata = {
  title: 'Data & Decisions — Digitalisation & DPP',
  description: 'Data-driven solutions for materials, processes, DPP, market analysis, and innovation.',
  keywords: 'data analysis, business intelligence, digital transformation, DPP, market research, data consulting',
  authors: [{ name: 'Data & Decisions' }],
  icons: {
    icon: '/cropped-cropped-Logo-Data-Decision-180x180.png',
    apple: '/cropped-cropped-Logo-Data-Decision-180x180.png',
  },
  openGraph: {
    title: 'Data & Decisions — Digitalisation & DPP',
    description: 'Data-driven solutions for materials, processes, DPP, market analysis, and innovation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Data & Decisions',
    images: [
      {
        url: '/cropped-cropped-Logo-Data-Decision-180x180.png',
        width: 596,
        height: 184,
        alt: 'Data & Decisions Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data & Decisions — Digitalisation & DPP',
    description: 'Data-driven solutions for materials, processes, DPP, market analysis, and innovation.',
    images: ['/cropped-cropped-Logo-Data-Decision-180x180.png'],
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#2da5e5] text-white px-4 py-2 rounded-md z-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="bg-slate-900 text-white py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-slate-300">
              © {new Date().getFullYear()} <span className="text-[#2da5e5] font-medium">Data & Decisions</span>. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}