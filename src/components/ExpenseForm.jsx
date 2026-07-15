import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense(formData);

    setFormData({
      amount: "",
      description: "",
      category: "",
      date: "",
    });
  };

  return (
    <div className="form-card">

      <div className="form-title">

        <div className="plus-icon">+</div>

        <h2>Add New Expense</h2>

      </div>

      <form
        className="expense-form"
        onSubmit={handleSubmit}
      >

        <div className="input-group">

          <label>Amount</label>

          <input
            type="number"
            name="amount"
            placeholder="₹ 0.00"
            value={formData.amount}
            onChange={handleChange}
            required
          />

        </div>

        <div className="input-group">

          <label>Description</label>

          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            required
          />

        </div>

        <div className="input-group">

          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Other</option>
          </select>

        </div>

        <div className="input-group">

          <label>Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

        </div>

        <div className="button-wrapper">

          <button type="submit">
            + Add Expense
          </button>

        </div>

      </form>

    </div>
  );
}

export default ExpenseForm;