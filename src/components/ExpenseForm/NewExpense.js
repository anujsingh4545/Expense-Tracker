import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDetails(enteredExpenseData) {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.getData(ExpenseData);
  }

  const [on, setOn] = useState(true);

  function setChange() {
    setOn(false);
  }

  function ChangeSet(value) {
    setOn(value);
  }

  if (on) {
    return (
      <div className="w-[100%] bg-[#A13333] mb-6 rounded-2xl py-[1.5rem] shadow-md shadow-[#ffffffa8]">
        <div className="flex justify-center w-[90%] md:w-[80%]  m-auto">
          <button type="submit" className="border-[0.1rem] p-4 px-10 md:px-14 text-[1.5rem] rounded-2xl bg-black mt-2" onClick={setChange}>
            Add Expense
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ExpenseForm onSaveExpenseData={saveExpenseDetails} onSend={ChangeSet} />
      </div>
    );
  }
}

export default NewExpense;
