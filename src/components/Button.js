import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const AnchorButton = ({ href, className, children, icon }) => {
  return (
    <a
      className={`${className} bg-secondary text-white px-5 py-2 rounded-full ml-5 flex items-center`}
      href={href}
    >
      <span className="mr-2">{icon}</span> {children}
    </a>
  );
};

export const LinkButton = ({ to, className, children }) => {
  return (
    <div className="h-12 my-5 flex justify-center items-center">
      <Link to={to}>
        <motion.div
          initial={{ scale: 1 }}
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
    </div>
  );
};

export const NormalButton = ({ children, className }) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05, backgroundColor: "#5933AA" }}
      className={`bg-secondary rounded-full ${className}`}
    >
      {children}
    </motion.button>
  );
};
