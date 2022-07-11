import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const SectionTitle = ({ children, className }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const animationHeading = useAnimation();

  return (
    <motion.h2 ref={ref} animate={animationHeading} className={className}>
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
