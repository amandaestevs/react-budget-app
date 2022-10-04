import React from "react";
import { useBudget } from "../context/BudgetContext";
import TransactionCard from "./TransactionCard";

export default function History({setShowCompleteHistory}) {
  const { transactions } = useBudget();
  const lastThreeTransactions = transactions.slice(-3);

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <h3 className="font-bold text-xl mb-2">History</h3>
      <div className="p-1 w-full flex flex-col items-center">
      {lastThreeTransactions.length === 0
          ? "No Transactions"
          : lastThreeTransactions.reverse().map((transaction) => {
              return (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                />
              );
            })}
      </div>
      <div className="flex w-full justify-center mb-2">
        <button className=" py-[2px] w-full text-lg hover:bg-gray-300" onClick={() => setShowCompleteHistory(true)}>View All</button>
      </div>
    </div>
  );
}
