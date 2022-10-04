import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useBudget } from "../context/BudgetContext";

export default function AddIncomeModal({ setAddIncomeModal }) {
  const { addIncome } = useBudget();
  const [incomeObj, setIncomeObj] = useState({
    name: "",
    amount: "",
    category: "none"
  });

  const handleChange = (e) => {
    setIncomeObj({
      ...incomeObj,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(incomeObj);
    setAddIncomeModal(false);
  };

  return (
    <div className="flex flex-col gap-y-3 items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-md bg-white py-2 px-3">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-lg">Add Income</h2>
        <AiOutlineClose
          className="text-lg cursor-pointer"
          onClick={() => setAddIncomeModal(false)}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-2">
          <label htmlFor="income-name">Name:</label>
          <input
            id="income-name"
            name="name"
            onChange={handleChange}
            placeholder="e.g Salary"
            type="text"
            className="border-2 border-solid"
            required
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="income-amount">Value:</label>
          <input
            id="income-amount"
            name="amount"
            onChange={handleChange}
            placeholder="e.g 4000"
            type="number"
            className="border-2 border-solid"
            required
          />
        </div>

        <div className="flex justify-center w-full mb-2">
          <button type="submit" className="bg-blue-500 text-white py-1 px-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
