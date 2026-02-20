import { useState, useRef } from "react";
function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return alert("Please add title and amount");

    const newExpense = {
        id: Date.now(),
        title,
        amount: parseFloat(amount)
    }

    onAddExpense(newExpense);
    setAmount("");
    setTitle("");
    titleRef.current.focus();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={title} 
      placeholder="Expense Title" 
      onChange={(e) => setTitle(e.target.value) } 
      ref={titleRef}
      />

      <input 
      type="number" 
      value={amount} 
      placeholder="Amount" 
      onChange={(e) => setAmount(e.target.value) }
      />

      <button type="submit">Add Expense</button>

    </form>
  );
}

export default ExpenseForm;
