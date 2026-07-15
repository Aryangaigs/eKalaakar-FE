const categoryIcons = {
  Food: "🍔",
  Travel: "✈️",
  Shopping: "🛍️",
  Bills: "📄",
  Entertainment: "🎬",
  Health: "❤️",
  Other: "📦",
};

function ExpenseItem({ expense, deleteExpense }) {

  const formattedDate = new Date(expense.date).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="expense-card">

      <div className="expense-top">

        <div className="expense-category">

          <div className="category-icon">
            {categoryIcons[expense.category] || "📦"}
          </div>

          <div>

            <h3>{expense.category}</h3>

            <p>{expense.description}</p>

          </div>

        </div>

        <h2 className="expense-amount">
          ₹{Number(expense.amount).toLocaleString()}
        </h2>

      </div>

      <div className="expense-bottom">

        <span className="expense-date">
          📅 {formattedDate}
        </span>

        <button
          className="delete-btn"
          onClick={() => deleteExpense(expense._id)}
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default ExpenseItem;