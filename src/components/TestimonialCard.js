import React from "react";
import { IoMdQuote } from "react-icons/io";

const TestimonialCard = ({ name, text, position, image }) => {
  return (
    <div className="shadow-lg bg-white p-5 rounded-lg">
      <p className="text-neutral-600">{text}</p>
      <div className="mt-10 flex justify-start items-center relative">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-5">
          <img src={image} alt="" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-secondary-dark">{name}</h4>
          <p className="text-sm text-neutral-600">{position}</p>
        </div>
        <IoMdQuote className="text-secondary/20 absolute right-0 text-7xl -top-12" />
      </div>
    </div>
  );
};

export default TestimonialCard;
