function SummaryCard({ total, expenses }) {

  const currentMonth = new Date().toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });

  const monthlyTotal = expenses
    .filter((expense) => {
      const expenseDate = new Date(expense.date);
      const today = new Date();

      return (
        expenseDate.getMonth() === today.getMonth() &&
        expenseDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((sum, expense) => sum + Number(expense.amount), 0);

  return (
    <div className="summary-card">

      <div className="summary-box">

        <div className="icon">
          💰
        </div>

        <div>

          <p>Total Spent</p>

          <h2>₹{total}</h2>

          <span>{expenses.length} Expenses</span>

        </div>

      </div>

      <div className="divider"></div>

      <div className="summary-box">

        <div className="icon">
          📅
        </div>

        <div>

          <p>This Month</p>

          <h2>₹{monthlyTotal}</h2>

          <span>{currentMonth}</span>

        </div>

      </div>

    </div>
  );
}

export default SummaryCard;