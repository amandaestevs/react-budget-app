import React from "react";
import { useBudget } from "../context/BudgetContext";
import { MdOutlineDelete } from "react-icons/md";

export default function TransactionCard({ transaction }) {
  const { name, amount, category, type, id} = transaction;
  const {deleteExpense, deleteIncome} = useBudget()

  const color = type === "expense" ? "bg-red-100" : "bg-green-100";
  

  return (
    <div className={`shadow-md w-full px-5 py-2 mb-3 ${color}`}>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p>${amount}</p>
      </div>

      {type === "expense" ? (
        <div className="flex items-center justify-between ">
          <div className="flex gap-x-2 items-center">
            <h4 className="text-sm">Category:</h4>
            <span>{category}</span>
          </div>
          <MdOutlineDelete
            className="text-xl cursor-pointer"
            onClick={() => deleteExpense(id)}
          />
        </div>
      ) : (
        <div className="flex items-center justify-end ">
          <MdOutlineDelete
            className="text-xl cursor-pointer"
            onClick={() => deleteIncome(id)}
          />
        </div>
      )}
    </div>
  );
}
