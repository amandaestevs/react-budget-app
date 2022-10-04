import React from "react";

export default function Transactions({
  setAddExpenseModal,
  setAddIncomeModal,
}) {
  const responsiveGap = "sm:gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6";
  return (
    <div className="flex flex-col items-center mb-3">
      <h2 className="font-bold text-xl mb-2">Transactions</h2>
      <div className={`flex gap-x-3 ${responsiveGap}`}>
        <button
          className="border-2 border-violet-700 px-2 py-1"
          onClick={() => setAddExpenseModal(true)}
        >
          Add Expenses
        </button>
        <button
          className="border-2 border-sky-700 px-2 py-1"
          onClick={() => setAddIncomeModal(true)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
}
