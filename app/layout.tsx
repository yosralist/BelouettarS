import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Data & Decisions — Digitalisation & DPP',
  description: 'Data-driven solutions for materials, processes, DPP, market analysis, and innovation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
