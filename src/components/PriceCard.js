import React from "react";

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
    <div className="shadow-lg bg-white rounded-lg max-w-[31%] mx-3">
      <div className="text-center bg-secondary-dark rounded-t-lg">
        <h3 className="text-2xl py-3 font-medium text-white">{title}</h3>
      </div>
      <div className="text-center text-secondary my-3">
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
      <div className="bg-secondary-dark rounded-b-lg px-4 py-3 text-white break-words">
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
          className="bg-yellow-500 text-primary hover:bg-white text-sm tracking-[1.5px] transition-colors rounded-full px-5 py-2 my-3 w-full max-w-[150px] mx-auto flex justify-center uppercase font-medium mt-5"
          onClick={handleClick}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
