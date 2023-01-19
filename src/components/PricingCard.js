import React from "react";
import { LinkButton } from "./Button";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PricingCard = ({ name, priceFixed, pricePM, index }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const animatePricingCard = useAnimation();

  if (inView) {
    animatePricingCard.start({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.2,
        delay: index * 0.1,
      },
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
      <h5 className="text-secondary-dark font-semibold text-2xl mb-2">
        {name}
      </h5>
      <p className="text-neutral-700 text-xl  mb-2">Tax Returns</p>
      <p className="text-neutral-700 text-xl mb-2 font-medium ">
        From £{priceFixed} or £{pricePM} P/M
      </p>
      <LinkButton to="/fixed-fee">What's included</LinkButton>
    </motion.div>
  );
};

export default PricingCard;
