import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyUsPoints = ({ point, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animatePoints = useAnimation();

  if (inView) {
    animatePoints.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.3,
        duration: (index + 1) * 0.5,
        bounce: 0.5,
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
      <img
        className="w-6 mr-3"
        src={point?.stackIcon?.localFile?.publicURL}
        alt=""
      />

      <span className="text-lg">{point?.stackText}</span>
    </motion.div>
  );
};

export default WhyUsPoints;
