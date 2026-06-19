import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [desc, setDesc]     = useState("");
  const [amount, setAmount] = useState("");
  const [cat, setCat]       = useState("food");
  const [error, setError]   = useState("");

  function handleSubmit() {
    if (!desc.trim() || !amount || +amount <= 0) {
      setError("Fill in all fields correctly.");
      return;
    }
    setError("");
    onAdd({ desc, amount: parseFloat(amount), cat });
    setDesc("");
    setAmount("");
  }

  return (
    <div className="expense-form">
      <input
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <select value={cat} onChange={e => setCat(e.target.value)}>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}