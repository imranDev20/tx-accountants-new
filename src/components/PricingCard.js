import React from "react";
import { LinkButton } from "./Button";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PricingCard = ({ name, priceFixed, pricePM }) => {
  const prices = [
    { id: 1, name: "Individual", priceFixed: 150, pricePM: 15 },
    { id: 2, name: "Sole Trader", priceFixed: 150, pricePM: 10 },
    { id: 3, name: "Limited Company", priceFixed: 150, pricePM: 10 },
  ];

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const animatePricingCard = useAnimation();

  if (inView) {
    animatePricingCard.start({
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.5 },
    });
  }
  if (!inView) {
    animatePricingCard.start({
      opacity: 0,
      scale: 0.8,
    });
  }

  return (
    <motion.div
      ref={ref}
      animate={animatePricingCard}
      className="shadow-lg px-5 py-10 rounded-lg text-center bg-white flex flex-col items-center"
    >
      <h5 className="text-neutral-700 font-semibold text-xl mb-2">{name}</h5>
      <p className="text-secondary-dark text-2xl  mb-2">Tax Returns</p>
      <p className="text-secondary-dark text-xl mb-2 font-semibold ">
        From £{priceFixed} or £{pricePM} P/M
      </p>
      <LinkButton to="/">What's included</LinkButton>
    </motion.div>
  );
};

export default PricingCard;
