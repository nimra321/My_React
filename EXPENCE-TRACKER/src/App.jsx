import './App.css'
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { useState, useEffect } from 'react'

function App() {

  const [expenses, setExpense] = useState(() => {
  try {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to parse expenses from localStorage:", error);
    return [];
  }
});

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const AddExpense = (expense) => {
    setExpense((prev) => [...prev, expense]);
  }

  const DeleteExpense = (id) => {
    setExpense((prev) => prev.filter((item) => item.id !== id));
  }

  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="app-container">
      <h1>Expence Tracker</h1>
      <ExpenseForm onAddExpense={AddExpense}/>
      <h3 className="total">Total Expense : ${ totalExpense.toFixed(2) }</h3>
      <ExpenseList expenses={expenses} onDeleteExpense={DeleteExpense}/>
    </div>
  )
}

export default App
