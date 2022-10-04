import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TransactionCard from "./TransactionCard";
import SearchBar from "./SearchBar";
import { useBudget } from "../context/BudgetContext";

export default function CompleteHistory({ setShowCompleteHistory }) {
  const { transactions } = useBudget();
  const [searchInput, setSearchInput] = useState("");

  const responsiveWidth = "sm:min-w-[310px] md:min-w-[400px] lg:min-w-[460px] xl:min-w-[510px]"
  const keys = ["name", "amount", "type", "category"];

  const search = (transactionsData) => {
    return transactionsData.filter((transaction) => {
      return keys.some((key) =>
        transaction[key].toLowerCase().includes(searchInput)
      );
    });
  };

  return (
    <div className={`flex flex-col items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-h-[50%] max-h-[90%] shadow-lg bg-white p-3 ${responsiveWidth}`}>
      <div className="flex justify-between items-center w-full mb-3">
        <h2 className="font-semibold text-xl">History</h2>
        <AiOutlineClose
          className="text-xl cursor-pointer"
          onClick={() => setShowCompleteHistory(false)}
        />
      </div>

      <div className="w-full mb-2">
        <SearchBar setSearchInput={setSearchInput} />
      </div>

      <div className="px-1 py-2 w-full flex flex-col items-center overflow-y-auto">
        {transactions.length === 0
          ? "No Transactions"
          : search(transactions).map((transaction) => {
              return (
                <TransactionCard
                  key={transaction.id}
                  id={transaction.id}
                  transaction={transaction}
                />
              );
            })}
      </div>
    </div>
  );
}
