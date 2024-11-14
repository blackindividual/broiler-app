import * as React from "react"
import { Card } from "../../../components/ui/card"

export function DashboardHeader({ title, subtitle, status }: {
  title: string;
  subtitle: string;
  status?: string;
}) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
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

export function FlockDetails({ details }: {
  details: Array<{ label: string; value: string; }>;
}) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-2">Flock Details</h2>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index}>
            {detail.label}: {detail.value}
          </p>
        ))}
      </div>
    </Card>
  )
}

export function ExpensesTable({ expenses }: {
  expenses: Array<{
    date: string;
    category: string;
    amount: number;
  }>;
}) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{expense.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{expense.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">${expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export function PerformanceMetrics({ metrics }: {
  metrics: Array<{
    label: string;
    value: string;
    change?: string;
  }>;
}) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-2">Performance Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
            {metric.change && (
              <p className="text-sm text-muted-foreground">{metric.change}</p>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}