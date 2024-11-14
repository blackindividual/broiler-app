// app/layout.tsx
import * as React from 'react'
import "./globals.css"

// Since next.js dependencies aren't available, we'll define minimal types
interface Metadata {
  title: string
  description: string 
}

// Create a basic font class simulation since next/font isn't available
const inter = {
  className: 'font-inter'
}

export const metadata: Metadata = {
  title: "Ralah Global Broiler Farm - Dashboard",
  description: "Farm management dashboard for tracking broiler performance",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.className}`}>
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}