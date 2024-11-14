// app/components/dashboard/performance-metrics.tsx
import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

interface Metric {
  label: string
  value: string | number
  change?: string
}

interface PerformanceMetricsProps {
  metrics: Metric[]
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            {metric.change && (
              <p className="text-xs text-muted-foreground">
                {metric.change}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}