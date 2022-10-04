import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

export const BudgetContext = React.createContext();

export function useBudget() {
  return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  const addExpense = (expense) => {
    const category = expense.category[0] === "Other" ? expense.newCategory[0] : expense.category[0];
    const newExpense = {
      id: uuidV4(),
      type: "expense",
      name: expense.name[0],
      amount: expense.amount[0],
      category: category,
    };

    setExpenses([...expenses, newExpense]);
  };

  const addIncome = (incomeObj) => {
    const newIncome = {
      id: uuidV4(),
      type: "income",
      name: incomeObj.name[0],
      amount: incomeObj.amount[0],
      category: incomeObj.category
    };

    setIncome([...income, newIncome]);
  };

  const deleteExpense = (id) => {
    const newArray = expenses.filter((item) => id !== item.id);
    setExpenses(newArray)
  };

   const deleteIncome = (id) => {
    const newArray = income.filter((item) => id !== item.id);
    setIncome(newArray)
  };

  useEffect(() => {
    setTransactions([...income, ...expenses]);
  }, [expenses, income]);

  return (
    <BudgetContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
        income,
        addIncome,
        deleteIncome,
        transactions,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
