import React from "react";
import VisaIcon from "../images/icons/visa.svg";
import MasterCardIcon from "../images/icons/mastercard.svg";
import MaestroCardIcon from "../images/icons/maestrocard.svg";
import AmericanExpressIcon from "../images/icons/american-express.svg";
import DiscoverIcon from "../images/icons/discover.svg";
import UnionIcon from "../images/icons/union.svg";

const PriceCard = ({
  title,
  setTitle,
  priceFixed,
  setPriceFixed,
  pricePM,
  setPricePM,
  points,
  ideals,
  showModal,
  setShowModal,
  priceId,
  setPriceId,
}) => {
  console.log(showModal);

  const handleClick = () => {
    setShowModal(!showModal);
    setPriceId(priceId);
    setTitle(title);
    setPriceFixed(priceFixed);
    setPricePM(pricePM);
  };

  return (
    <div className="shadow-lg bg-white rounded-lg w-3/4 md:w-1/2 xl:w-[31%] mx-3 mb-10">
      <div className="text-center bg-secondary-dark rounded-t-lg">
        <h3 className="text-2xl py-3 font-medium text-white">{title}</h3>
      </div>
      <div className="text-center text-secondary-dark my-3">
        <h4 className="font-semibold text-xl">Tax Returns</h4>
        <p className="font-medium text-xl">
          From £{priceFixed} or £{pricePM} P/M
        </p>
      </div>

      <div className="mt-5 mb-5">
        {points.map((point) => (
          <p
            className="px-3 text-center py-[5px] text-fontColor-heading even:bg-[rgb(240,240,240)]"
            key={point}
          >
            {point}
          </p>
        ))}
      </div>

      <div className="bg-secondary-dark rounded-b-lg px-4 py-5 text-white break-words">
        <h5 className="font-semibold mb-1">IDEAL FOR:</h5>
        <div>
          {ideals.map((ideal) => (
            <span
              className="text-sm after:content-[','] last:after:content-['']"
              key={ideal}
            >
              {" "}
              {ideal}
            </span>
          ))}
        </div>
        <button
          className="bg-yellow-500 text-primary hover:bg-white text-sm tracking-[1.5px] transition-colors rounded-full px-5 py-2 my-3 w-full max-w-[150px] mx-auto flex justify-center uppercase font-bold mt-5"
          onClick={handleClick}
        >
          Buy Now
        </button>
        <div className="grid grid-cols-6 max-w-[200px] mx-auto gap-1 mt-5">
          <div className="bg-white rounded-sm p-1 flex items-center">
            <img src={VisaIcon} alt="" />
          </div>
          <div className="bg-white rounded-sm p-1 flex items-center">
            <img src={MasterCardIcon} alt="" />
          </div>
          <div className="bg-white rounded-sm p-1 flex items-center">
            <img src={MaestroCardIcon} alt="" />
          </div>
          <div className="rounded-sm flex items-center">
            <img src={AmericanExpressIcon} alt="" />
          </div>
          <div className="bg-white rounded-sm p-1 flex items-center">
            <img src={DiscoverIcon} alt="" />
          </div>
          <div className="bg-white rounded-sm p-1 flex items-center">
            <img src={UnionIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
