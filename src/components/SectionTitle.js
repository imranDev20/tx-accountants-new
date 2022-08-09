import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const SectionTitle = ({ children, className }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const animationHeading = useAnimation();

  if (inView) {
    animationHeading.start({
      scale: 1,
      opacity: 1,
      transition: { type: "spring" },
    });
  }

  if (!inView) {
    animationHeading.start({
      opacity: 0,
      scale: 0.8,
    });
  }

  return (
    <motion.h2 ref={ref} animate={animationHeading} className={className}>
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
