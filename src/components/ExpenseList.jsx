import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-section">

      <div className="expense-header">

        <h2>Your Expenses</h2>

        <span>{expenses.length} Expenses</span>

      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <h3>💸 No expenses yet</h3>
          <p>Add your first expense above.</p>
        </div>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense._id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default ExpenseList;