import React from "react";
import { LinkButton } from "./Button";

const PricingCard = ({ name, priceFixed, pricePM }) => {
  return (
    <div className="shadow-lg px-5 py-10 rounded-lg text-center bg-white flex flex-col items-center">
      <h5 className="text-neutral-700 font-semibold text-xl mb-2">{name}</h5>
      <p className="text-secondary-dark text-2xl  mb-2">Tax Returns</p>
      <p className="text-secondary-dark text-xl mb-2 font-semibold ">
        From £{priceFixed} or £{pricePM} P/M
      </p>
      <LinkButton to="/">What's included</LinkButton>
    </div>
  );
};

export default PricingCard;
