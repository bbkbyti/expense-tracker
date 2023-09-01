import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            state.push({ id: Date.now(), ...action.payload });
        },

        editExpense: (state, action) => {
            const { id, name, amount } = action.payload;
            const expenseToEdit = state.find(expense => expense.id === id);
            if (expenseToEdit) {
                expenseToEdit.name = name
                expenseToEdit.amount = amount
            }
        },

        deleteExpense: (state, action) => {
            return state.filter((expense) => expense.id !== action.payload);
        }
    }
})

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;