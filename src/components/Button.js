import React from "react";
import { motion } from "framer-motion";

export const AnchorButton = ({ href, className, children }) => {
  return (
    <a className={`${className} `} href={href}>
      {children}
    </a>
  );
};

export const LinkButton = () => {};

export const NormalButton = ({ children, className }) => {
  return (
    <button className={`bg-secondary rounded-full ${className}`}>
      {children}
    </button>
  );
};
