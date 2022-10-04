import React from "react";
import { useBudget } from "../context/BudgetContext";

export default function Balance() {
  const { income, expenses } = useBudget();

  const calculateTotalIncome = () => {
    const totalAmountArray = income.map((item) => item.amount);
    const totalAmountNumber = totalAmountArray.map((item) => parseFloat(item));

    const totalIncome = totalAmountNumber.reduce((total, current) => {
      return total + current;
    }, 0);

    return totalIncome;
  };

  const calculateTotalExpense = () => {
    const totalAmountArray = expenses.map((item) => item.amount);
    const totalAmountNumber = totalAmountArray.map((item) => parseFloat(item));

    const totalExpense = totalAmountNumber.reduce((total, current) => {
      return total + current;
    }, 0);

    return totalExpense;
  };

  const calculateBalance = () => {
    const balance = totalIncome - totalExpense;
    if (balance < 0) return `-$${balance * -1}`;
    return `$${balance}`;
  };

  const totalIncome = calculateTotalIncome();
  const totalExpense = calculateTotalExpense();
  const balance = calculateBalance();

  const responsiveGap = "sm:gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6";

  return (
    <div className="mt-2 flex flex-col items-center mb-3">
      <div className="flex flex-col items-center mb-2">
        <h2 className="font-bold text-xl">Your Balance</h2>
        <p className="text-lg">{balance}</p>
      </div>

      <div className={`flex gap-x-3 ${responsiveGap}`}>
        <div className="bg-red-600 text-white rounded-md py-1 px-2 flex flex-col items-align w-[89px]">
          <h3 className="text-lg font-semibold">Expenses</h3>
          <p>${totalExpense}</p>
        </div>

        <div className="bg-green-500 text-white rounded-md py-1 px-2 flex flex-col items-align w-[89px]">
          <h3 className="text-lg font-semibold">Income</h3>
          <p>${totalIncome}</p>
        </div>
      </div>
    </div>
  );
}
