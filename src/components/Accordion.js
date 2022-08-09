import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        key="question"
        className=""
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className={`text-md font-semibold mb-4 pb-2 border-b border-secondary/20 cursor-pointer  ${
            isOpen ? "text-secondary" : "text-neutral-700"
          }`}
        >
          Q: {question}
        </motion.div>
      </motion.div>

      {isOpen && (
        <motion.div
          key="answer"
          className="text-neutral-600 leading-7"
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            marginBottom: 40,
          }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
        >
          <span className="font-semibold">Ans:</span> {answer}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Accordion;
