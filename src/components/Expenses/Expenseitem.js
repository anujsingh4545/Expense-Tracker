import React from "react";

function Expenseitem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="w-[95%] m-auto mt-[1rem] mb-[1rem] rounded-xl bg-[#313131d2] flex p-2 items-center">
      <div className=" text-center border-[0.1rem] w-[6rem] p-2  rounded-xl bg-black ml-1 ">
        <div className="text-[1rem] pb-0 font-semibold">{month}</div>
        <div className="text-[0.7rem] font-semibold">{year}</div>
        <div className="text-[1.5rem] font-bold">{day}</div>
      </div>
      <h2 className="flex-1 pl-4 text-[1.3rem] md:text-[1.7rem] italic font-semibold">{props.title}</h2>
      <div className="w-[6.5rem] md:w-[10rem] border-[0.1rem] text-center p-2 mr-2 rounded-xl bg-[#A13333] text-[1rem] md:text-[1.3rem] font-semibold">$ {props.amount}</div>
    </div>
  );
}

export default Expenseitem;
