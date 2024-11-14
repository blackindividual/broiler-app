// app/components/cards/stats-card.tsx
import * as React from 'react'
import { LucideIcon } from "lucide-react"
import { Card } from "../ui/card"

interface StatsCardProps {
  title: string
  value: string
  icon: LucideIcon
  subtitle?: string
  valueClassName?: string
}

export function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  subtitle, 
  valueClassName 
}: StatsCardProps) {
  return (
    <Card>
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div>
        <div className={`text-2xl font-bold ${valueClassName}`}>{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </Card>
  )
}