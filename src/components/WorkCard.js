import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkCard = ({ name, icon, index }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const animateWorkCard = useAnimation();

  if (inView) {
    animateWorkCard.start({
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.5 },
    });
  }
  if (!inView) {
    animateWorkCard.start({
      opacity: 0,
      scale: 0.8,
    });
  }

  return (
    <motion.div
      ref={ref}
      animate={animateWorkCard}
      className="flex flex-col items-center bg-white rounded-lg shadow-lg py-5"
    >
      <div>
        <img className="w-2/12 mx-auto" src={icon} alt={name} />
      </div>
      <h5 className="text-xl mt-5 text-neutral-700">{name}</h5>
    </motion.div>
  );
};

export default WorkCard;
