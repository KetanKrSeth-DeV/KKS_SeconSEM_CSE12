import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0)
    return <p className="no-expenses">No expenses found.</p>;

  return (
    <div>
      {expenses.map(e => (
        <ExpenseItem key={e.id} expense={e} onDelete={onDelete} />
      ))}
    </div>
  );
}