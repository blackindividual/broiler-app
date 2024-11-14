// app/components/dashboard/expenses-table.tsx
import * as React from 'react';
import { Table } from "../../../components/ui/table";
import { Card } from "../../../components/ui/card";

interface ExpenseItem {
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface ExpensesTableProps {
  expenses?: ExpenseItem[];
}

export function ExpensesTable({ expenses = [] }: ExpensesTableProps) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td className="text-right">${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}