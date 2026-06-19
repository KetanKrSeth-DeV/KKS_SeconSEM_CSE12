export default function Summary({ total, count }) {
  const avg = count ? (total / count).toFixed(2) : "0.00";

  return (
    <div className="summary">
      <div className="summary-card">
        <p>Total</p>
        <strong>₹{total.toFixed(2)}</strong>
      </div>
      <div className="summary-card">
        <p>Entries</p>
        <strong>{count}</strong>
      </div>
      <div className="summary-card">
        <p>Average</p>
        <strong>₹{avg}</strong>
      </div>
    </div>
  );
}