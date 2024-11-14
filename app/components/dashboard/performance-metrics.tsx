// app/components/dashboard/performance-metrics.tsx
import * as React from 'react';
import { Card } from "../../../components/ui/card";

interface MetricItem {
  label: string;
  value: string;
  change: string;
}

interface PerformanceMetricsProps {
  metrics?: MetricItem[];
}

export function PerformanceMetrics({ metrics = [] }: PerformanceMetricsProps) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
      <div className="grid gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-1">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.change}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}