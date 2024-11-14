import * as React from "react"
import { Card } from "../ui/card"
import { Table } from "../ui/table"
import { Badge } from "../ui/badge"

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Farm Dashboard</h1>
      <Badge>Active</Badge>
    </div>
  )
}

export function FlockDetails() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-2">Flock Details</h2>
      <div className="space-y-2">
        <p>Total Birds: 1,000</p>
        <p>Age: 45 days</p>
        <p>Mortality Rate: 2%</p>
      </div>
    </Card>
  )
}

export function ExpensesTable() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-03-14</td>
            <td>Feed</td>
            <td>$500</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}

export function PerformanceMetrics() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-2">Performance Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Feed Conversion Ratio</p>
          <p className="text-2xl font-bold">1.75</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Daily Weight Gain</p>
          <p className="text-2xl font-bold">52g</p>
        </div>
      </div>
    </Card>
  )
}