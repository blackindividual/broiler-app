// app/layout.tsx

import { Inter } from 'next/font/google'
import './globals.css'

// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'  // Add display swap for better font loading
})

// Metadata must be in a server component (no 'use client' directive)
export const metadata = {
  title: 'Next.js App',
  description: 'Created with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className} 
        suppressHydrationWarning
        data-gr-ext-installed=""
        data-new-gr-c-s-check-loaded=""
      >
        {children}
      </body>
    </html>
  )
}