import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturesPoints = ({ point, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animatePoints = useAnimation();

  if (inView) {
    animatePoints.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: index * 0.1,
        duration: 1.5,
        bounce: 0.1,
      },
    });
  }
  if (!inView) {
    animatePoints.start({
      x: 100,
      opacity: 0,
    });
  }

  return (
    <motion.div
      ref={ref}
      animate={animatePoints}
      key={index}
      className="flex items-center my-5 "
    >
      <img className="w-6 mr-3" src={point?.icon?.url} alt="" />

      <span className="text-lg">{point?.name}</span>
    </motion.div>
  );
};

export default FeaturesPoints;
