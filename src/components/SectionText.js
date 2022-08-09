import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const SectionText = ({ children, className }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const animationParagraph = useAnimation();

  if (inView) {
    animationParagraph.start({
      scale: 1,
      opacity: 1,
      transition: { type: "spring", delay: 0.2 },
    });
  }
  if (!inView) {
    animationParagraph.start({
      opacity: 0,
      scale: 0.8,
    });
  }

  return (
    <motion.p ref={ref} animate={animationParagraph} className={`${className}`}>
      {children}
    </motion.p>
  );
};

export default SectionText;
