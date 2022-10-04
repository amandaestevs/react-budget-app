import { useState } from "react";
import { BudgetProvider } from "./context/BudgetContext";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import History from "./components/History";
import CompleteHistory from "./components/CompleteHistory";
import AddExpenseModal from "./components/AddExpenseModal";
import AddIncomeModal from "./components/AddIncomeModal";

function App() {
  const [showAddExpenseModal, setAddExpenseModal] = useState(false);
  const [showAddIncomeModal, setAddIncomeModal] = useState(false);
  const [showCompleteHistory, setShowCompleteHistory] = useState(false);

  const responsiveWidth = "sm:min-w-[300px] md:min-w-[390px] lg:min-w-[450px] xl:min-w-[500px]"
  const completeHistoryOpen = "opacity-50"

  return (
    <BudgetProvider>
      <div className="w-screen min-h-screen flex flex-col items-center bg-gray-200">
        <div className="w-full bg-purple-800 flex items-center justify-center py-2">
          <h1 className="font-bold text-2xl text-white">Expenses Tracker</h1>
        </div>
        <div 
        className={`flex flex-col items-center my-4 bg-white shadow-lg p-2 ${responsiveWidth} ${showCompleteHistory && completeHistoryOpen}`}>
          <Balance />
          <Transactions
            setAddExpenseModal={setAddExpenseModal}
            setAddIncomeModal={setAddIncomeModal}
          />
          <History setShowCompleteHistory={setShowCompleteHistory} />
        </div>

        {showAddExpenseModal && (
          <AddExpenseModal setAddExpenseModal={setAddExpenseModal} />
        )}
        {showAddIncomeModal && (
          <AddIncomeModal setAddIncomeModal={setAddIncomeModal} />
        )}
        {showCompleteHistory && (
          <CompleteHistory setShowCompleteHistory={setShowCompleteHistory} />
        )}
      </div>
    </BudgetProvider>
  );
}

export default App;
