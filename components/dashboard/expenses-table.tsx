import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

interface Expense {
  date: string
  description: string
  amount: number
  category: string
}

interface ExpensesTableProps {
  expenses: Expense[]
}

export function ExpensesTable({ expenses }: ExpensesTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense, index) => (
            <TableRow key={index}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell className="text-right">
                ${expense.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}