export default function ExpenseItem({ expense, onDelete }) {
  const { id, desc, amount, cat } = expense;

  return (
    <div className="expense-item">
      <div className="info">
        <strong>{desc}</strong>
        <span className="badge">{cat}</span>
      </div>
      <div className="right">
        <span className="amount">₹{amount.toFixed(2)}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}