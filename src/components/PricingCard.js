import React from "react";
import { LinkButton } from "./Button";

const PricingCard = ({ name, priceFixed, pricePM }) => {
  return (
    <div className="shadow-lg px-5 py-10 rounded-lg text-center bg-white flex flex-col items-center">
      <h5 className="text-neutral-700 font-semibold text-xl leading-10 mb-2">
        {name}
      </h5>
      <p className="text-secondary text-2xl leading-10 mb-2">Tax Returns</p>
      <p className="text-secondary leading-10 text-xl mb-2 font-medium ">
        From £{priceFixed} or £{pricePM} P/M
      </p>
      <LinkButton to="/">What's included</LinkButton>
    </div>
  );
};

export default PricingCard;
