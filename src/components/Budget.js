
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const MAX_BUDGET = 20000;


const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalCost = expenses.map(expense => expense.cost).reduce((a, b) => a + b, 0);


    const handleBudgetChange = (event) => {
        if (event.target.value > MAX_BUDGET) {
            alert("Budget value cannot exceed " + MAX_BUDGET);
            return;
        }
        if (event.target.value < totalCost) {
            alert("Budget value cannot be lower than " + totalCost);
            return;
        }

        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;