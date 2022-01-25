import React from "react";

function ExpenseFilter(props) {
  function dropDownChange(event) {
    props.onChangeYear(event.target.value);
  }

  return (
    <div className="flex w-[95%] m-auto p-1 mb-7 mt-3 items-center">
      <label className="text-[1.7rem] font-semibold flex-1 pl-1">Filter by year </label>
      <select value={props.setYear} onChange={dropDownChange} className="text-black p-2 px-8 md:px-12 text-[1.5rem] font-bold outline-none rounded-md cursor-pointer">
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
