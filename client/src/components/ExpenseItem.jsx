import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteExpense } from './../redux/expenseSlice'

export default function ExpenseItem({ expense }) {

    const dispatch = useDispatch();

    const handleDeleteExpense = () => {
        dispatch(deleteExpense(expense.id));
    }
    return (
        <div>
            <span>{expense.name}</span>
            <span>{expense.amount}</span>
            <button onClick={handleDeleteExpense}>Delete Expense</button>
        </div>
    )
}
