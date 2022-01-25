import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Expenseitem from "./Expenseitem";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");
  function FilterYearget(GetYear) {
    setFilterYear(GetYear);
  }

  const FilterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p className="text-[1.5rem] italic font-semibold my-8 text-center ">No expenses Found 🤍</p>;

  if (FilterExpenses.length > 0) {
    expenseContent = FilterExpenses.map((expense) => {
      return <Expenseitem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
    });
  }

  return (
    <div className="w-[100%] rounded-2xl  bg-black shadow-2xl  shadow-black pt-4 pb-4">
      <ExpenseFilter onChangeYear={FilterYearget} setYear={filterYear} />
      <ExpensesChart expenses={FilterExpenses} />
      {expenseContent}
    </div>
  );
}

export default Expenses;
