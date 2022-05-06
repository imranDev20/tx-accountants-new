import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const WorkCard = ({ name, icon, inView, index }) => {
  const animateWorkCard = useAnimation();

  useEffect(() => {
    if (inView) {
      animateWorkCard.start({
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: (index + 1) * 0.8,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animateWorkCard.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView, animateWorkCard, index]);

  return (
    <motion.div
      animate={animateWorkCard}
      className="flex flex-col items-center bg-white rounded-lg shadow-lg py-10"
    >
      <div>
        <img className="w-3/12 mx-auto" src={icon} alt={name} />
      </div>
      <h5 className="text-xl mt-5 text-neutral-700">{name}</h5>
    </motion.div>
  );
};

export default WorkCard;
