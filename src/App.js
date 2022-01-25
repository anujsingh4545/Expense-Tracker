import React, { useState } from "react";
import NewExpense from "./components/ExpenseForm/NewExpense";
import Expenses from "./components/Expenses/Expenses";
function App() {
  let leadsFromLocalStorage = JSON.parse(localStorage.getItem("Dummy_expenses"));

  // localStorage.clear();
  let Dummy_expenses = [];
  // Dummy_expenses = [];

  if (leadsFromLocalStorage) {
    Dummy_expenses = leadsFromLocalStorage;
  }

  for (let i = 0; i < Dummy_expenses.length; i++) {
    console.log(Dummy_expenses[i].date);

    Dummy_expenses[i].date = new Date(Dummy_expenses[i].date);
  }

  console.log(Dummy_expenses);

  const [expenses, setExpenses] = useState(Dummy_expenses);

  function addExpenseHandler(PassData) {
    Dummy_expenses.push(PassData);
    localStorage.setItem("Dummy_expenses", JSON.stringify(Dummy_expenses));

    setExpenses((prevExpenses) => {
      return [...prevExpenses];
    });
  }

  return (
    <div className=" w-[95%] sm:w-[80%] md:w-[65%] flex m-auto flex-col">
      <NewExpense getData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
