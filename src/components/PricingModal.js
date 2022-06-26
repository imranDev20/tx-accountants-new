import React from "react";
import { FaTimes } from "react-icons/fa";
import Checkout from "./Checkout";

const PricingModal = ({
  showModal,
  setShowModal,
  priceId,
  title,
  priceFixed,
  pricePM,
}) => {
  return (
    <div
      className={`w-full h-full bg-black/70 fixed top-0 left-0 bottom-0 right-0 transform ${
        showModal ? "opacity-100" : "opacity-0"
      } ${showModal ? "scale-100" : "scale-0"} ${
        showModal ? "z-20" : "z-[-100]"
      }`}
    >
      <div
        className={`bg-gray-100 relative top-1/2 -translate-y-1/2  max-w-xl w-[50%] mx-auto  transition-all shadow-lg rounded-lg overflow-hidden ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-secondary-dark py-5">
          <h2 className="text-center text-white text-3xl font-medium">
            {title}
          </h2>
        </div>

        <div className="flex justify-between p-5">
          <div className="text-center bg-white flex-1 flex flex-col items-center p-10 shadow-md rounded m-2">
            <p className="font-normal text-5xl text-secondary mb-2">
              £{priceFixed}
            </p>
            <h3 className="font-normal text-xl mb-5">One-Time</h3>
            <Checkout priceId={priceId[0]} />
          </div>
          <div className="text-center bg-white flex-1 flex flex-col items-center p-10 shadow-md rounded m-2">
            <p className="font-normal text-5xl text-secondary mb-2">
              £{pricePM}
            </p>
            <h3 className="font-normal text-xl mb-5">/month</h3>
            <Checkout priceId={priceId[1]} isSubscription />
          </div>
        </div>
        <div
          className="absolute top-5 right-[20px] text-2xl font-medium cursor-pointer "
          onClick={() => setShowModal(!showModal)}
        >
          <FaTimes className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
