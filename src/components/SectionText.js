import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ReactMarkdown from "react-markdown";

const SectionText = (props) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const animationParagraph = useAnimation();

  if (inView) {
    animationParagraph.start({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        // delay: 0.1,
        duration: 1.5,
        bounce: 0.1,
      },
    });
  }
  if (!inView) {
    animationParagraph.start({
      opacity: 0,
      scale: 0.9,
    });
  }

  return (
    <motion.p
      {...props}
      ref={ref}
      animate={animationParagraph}
      className={`${props.className}`}
    >
      <ReactMarkdown
        components={{
          p: React.Fragment,
        }}
      >
        {props.children}
      </ReactMarkdown>
    </motion.p>
  );
};

export default SectionText;
