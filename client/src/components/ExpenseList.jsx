import React from 'react'
import { useSelector } from 'react-redux'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList() {
    const expenses = useSelector((state) => state.expenses);
    return (
        <div>
            <h2>Expense List</h2>
            {expenses.map((expense) => (
                <ExpenseItem key={expenses.id} expense={expense} />
            ))}
        </div>
    )
}
