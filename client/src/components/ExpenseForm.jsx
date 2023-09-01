import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseSlice';

export default function ExpenseForm() {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();


    const handleAddExpense = () => {
        if (name && amount) {
            dispatch(addExpense({ name, amount: parseFloat(amount) }))
            setName('');
            setAmount('');
        }
    }
    return (
        <div>
            <h2>Add Expense</h2>
            <input
                type='text'
                placeholder='Expense Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='number'
                placeholder='Expense Amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleAddExpense}>Add Expense</button>
        </div>
    )
}
