import React, { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function changeTitle(event) {
    setTitle(event.target.value);
  }

  function changeAmount(event) {
    setAmount(event.target.value);
  }

  function changeDate(event) {
    setDate(event.target.value);
  }

  function formSubmit(event) {
    event.preventDefault();
    if (title === "" || amount === "" || date === "") {
      alert("Please enter every data carefully...!");
    } else {
      const expenseData = {
        title: title,
        amount: +amount,
        date: new Date(date),
      };
      props.onSaveExpenseData(expenseData);
      setTitle("");
      setAmount("");
      setDate("");

      // props.onSend(true);
    }
  }

  function GoBack() {
    props.onSend(true);
  }

  return (
    <form className="w-[100%] bg-[#A13333] mb-6 rounded-2xl pt-[2rem] pb-[1.5rem] shadow-md shadow-[#ffffffa8]" onSubmit={formSubmit}>
      <div>
        <section className="flex  w-[90%] md:w-[80%] m-auto mb-4 items-center ">
          <label className="text-[1.5rem] font-semibold tracking-widest italic  w-[30%] ">Title</label>
          <input type="text" className="w-[100%] m-auto rounded-lg text-[1.5rem] font-semibold p-1 md:p-2 outline-none text-black pl-2" value={title} onChange={changeTitle} />
        </section>

        <section className="flex  w-[90%] md:w-[80%] m-auto mb-4 items-center">
          <label className="text-[1.5rem] font-semibold tracking-widest italic w-[30%]">Amount</label>
          <input type="number" className="w-[100%] m-auto rounded-lg text-[1.5rem] font-semibold p-1 md:p-2 outline-none text-black pl-2" min="0.01" step="0.01" value={amount} onChange={changeAmount} />
        </section>

        <section className="flex  w-[90%] md:w-[80%] m-auto mb-4 items-center">
          <label className="text-[1.5rem] font-semibold tracking-widest italic  w-[30%]">Date</label>
          <input type="date" className="w-[100%] m-auto rounded-lg text-[1.5rem] font-semibold p-1 md:p-2 outline-none text-black pl-2" min="2021-01-01" max="2025-12-31" value={date} onChange={changeDate} />
        </section>
      </div>

      <div className="flex justify-end w-[90%] md:w-[80%]  m-auto">
        <button type="button" className="border-[0.1rem] p-2 pl-5 pr-5 md:pl-10 md:pr-10 text-[1.5rem] rounded-2xl bg-black mt-2 mr-3" onClick={GoBack}>
          Cancel
        </button>
        <button type="submit" className="border-[0.1rem] p-2 pl-5 pr-5 md:pl-10 md:pr-10 text-[1.5rem] rounded-2xl bg-black mt-2">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
