// app/dashboard/page.tsx
import * as React from "react"
import { DashboardHeader } from "../components/layout/dashboard-header"
import { FlockDetails } from "../components/dashboard/flock-details"
import { PerformanceMetrics } from "../components/dashboard/performance-metrics"
import { ExpensesTable } from "../components/dashboard/expenses-table"

export default function DashboardPage() {
  // Updated expenses data to match ExpensesTable interface
  const expensesData = [
    { date: "2024-03-01", description: "Ad Campaign", amount: 500, category: "Marketing" },
    { date: "2024-03-02", description: "Farm Supplies", amount: 300, category: "Supplies" },
    { date: "2024-03-03", description: "Veterinary", amount: 750, category: "Services" }
  ];

  // Updated metrics data to match PerformanceMetrics interface
  const performanceMetrics = [
    { label: "Total Sales", value: "$12,345", change: "+12.3% from last month" },
    { label: "Growth Rate", value: "23%", change: "+2.1% from last month" },
    { label: "Active Users", value: "1,234", change: "+10% from last month" }
  ];

  // Sample flock details
  const flockDetails = [
    { label: "Flock Size", value: "500" },
    { label: "Average Age", value: "24 weeks" },
    { label: "Mortality Rate", value: "2.1%" },
    { label: "Feed Conversion", value: "1.8" }
  ];

  return (
    <div className="space-y-4">
      <DashboardHeader
        title="Dashboard"
        subtitle="Welcome to your farm dashboard"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FlockDetails details={flockDetails} />
        <PerformanceMetrics metrics={performanceMetrics} />
      </div>
      <ExpensesTable expenses={expensesData} />
    </div>
  )
}