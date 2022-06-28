import React from "react";

const Burger = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`flex xl:hidden w-8 h-6 fixed top-6 right-4 justify-between flex-col flex-nowrap z-10 cursor-pointer`}
    >
      <div
        className={`w-8 bg-gray-50 rounded h-[3px] origin-[1px] transition-all ${
          open ? "rotate-45" : "rotate-0"
        }`}
      ></div>
      <div
        className={`w-8 bg-gray-50 rounded h-[3px] origin-[1px] transition-all ${
          open ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      ></div>
      <div
        className={`w-8 bg-gray-50 rounded h-[3px] origin-[1px] transition-all ${
          open ? "-rotate-45" : "rotate-0"
        }`}
      ></div>
    </div>
  );
};
export default Burger;
