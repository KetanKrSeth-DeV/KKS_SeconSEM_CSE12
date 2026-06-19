import { useState, useEffect } from "react";
import "./App.css";
import Expenseform from "./Expenseform";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(expense) {
    setExpenses(prev => [{ id: Date.now(), ...expense }, ...prev]);
  }

  function deleteExpense(id) {
    setExpenses(prev => prev.filter(e => e.id !== id));
  }

  const filtered = filter === "all"
    ? expenses
    : expenses.filter(e => e.cat === filter);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="app">
      <h2>Expense Tracker</h2>
      <Summary total={total} count={expenses.length} />
      <ExpenseForm onAdd={addExpense} />
      <div className="filter">
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="other">Other</option>
        </select>
         <button className="reset-btn" onClick={() => {
  setExpenses([]);
  localStorage.removeItem("expenses");
}}>Reset</button>
      </div>
      <ExpenseList expenses={filtered} onDelete={deleteExpense} />
    </div>
  );
}
