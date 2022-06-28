import React from "react";
import { Link } from "gatsby";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnchorButton = ({ href, className, children, icon }) => {
  return (
    <a
      className={`${className} bg-secondary text-white px-5 py-2 rounded-full  flex items-center`}
      href={href}
    >
      <span className="mr-2">{icon}</span> {children}
    </a>
  );
};

export const LinkButton = ({ to, className, children }) => {
  const animationButton = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (inView) {
    animationButton.start({
      scale: 1,
      opacity: 1,
      transition: { type: "spring" },
    });
  }
  if (!inView) {
    animationButton.start({
      opacity: 0,
      scale: 0.8,
    });
  }

  return (
    <motion.div
      ref={ref}
      animate={animationButton}
      className={`h-12 my-5 flex ${className}`}
    >
      <Link to={to}>
        <motion.div
          whileHover={{
            scale: 1.02,
            originX: 0.5,
            backgroundColor: "#fff",
            border: "1px solid ",
            color: "rgb(133, 77, 255)",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
          className={`px-4 py-2 rounded-full bg-secondary  text-white`}
        >
          {children}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const NormalButton = ({ children, className, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`bg-secondary rounded-full ${className}`}
    >
      {children}
    </motion.button>
  );
};
