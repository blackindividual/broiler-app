// app/components/layout/dashboard-header.tsx
import * as React from 'react'

interface DashboardHeaderProps {
  title: string
  subtitle: string
  status?: string
}

export function DashboardHeader({ title, subtitle, status }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      {status && (
        <div className="px-2 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
          {status}
        </div>
      )}
    </div>
  )
}