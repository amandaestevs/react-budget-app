import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useBudget } from "../context/BudgetContext";
import { v4 as uuidV4 } from "uuid";

export default function AddExpenseModal({ setAddExpenseModal }) {
  const { addExpense } = useBudget();

  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    category: ["none"],
    newCategory: ""
  });

  const [other, setOther] = useState(false);

  const categories = ["None", "Housing", "Food", "Entertainment", "Other"];

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: [e.target.value],
    });
  };

  const handleCategoryChange = (e) => {
    handleChange(e);
    const value = e.target.value === "Other" ? true : false;
    setOther(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setAddExpenseModal(false);
  };

  return (
    <div className="flex flex-col gap-y-3 items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-md bg-white py-2 px-3">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-lg">Add Expense</h2>
        <AiOutlineClose
          className="text-lg cursor-pointer"
          onClick={() => setAddExpenseModal(false)}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2">
          <label htmlFor="expense-name">Name:</label>
          <input
            placeholder="Expense Name"
            id="expense-name"
            name="name"
            onChange={handleChange}
            className="border-2 border-solid"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="expense-amount">Amount:</label>
          <input
            placeholder="Amount Spent"
            id="expense-amount"
            name="amount"
            onChange={handleChange}
            className="border-2 border-solid"
            type="number"
            required
          />
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="expense-category">Category:</label>
          <select
            id="expense-category"
            name="category"
            defaultValue={"None"}
            value={expense.category || []}
            onChange={handleCategoryChange}
            className="border-2 border-solid"
          >
            {categories.map((categority) => {
              return (
                <option key={uuidV4()} value={categority}>
                  {categority}
                </option>
              );
            })}
          </select>
        </div>

        {other && (
          <div className="flex flex-col mb-3">
            <label htmlFor="new-category">Please Specify:</label>
            <input
              className="border-2 border-solid"
              id="new-category"
              placeholder="New Categority"
              name="newCategory"
              onChange={handleChange}
            />
          </div>
        )}

        <div className="flex justify-center w-full mb-2">
          <button tupe="submit" className="bg-blue-500 text-white py-1 px-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
