// app/components/layout/dashboard-header.tsx
import { Badge } from "@/components/ui/badge"

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
        <Badge variant="outline" className="text-sm">
          {status}
        </Badge>
      )}
    </div>
  )
}