import React from "react";

const WorkCard = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg py-10">
      <div>
        <img className="w-3/12 mx-auto" src={icon} alt={name} />
      </div>
      <h5 className="text-xl mt-5 text-neutral-700">{name}</h5>
    </div>
  );
};

export default WorkCard;
