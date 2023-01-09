// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {FaChevronDown} from 'react-icons/fa'

// const Accordion = ({ question, answer, index }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         key="question"
//         onClick={() => setIsOpen(!isOpen)}
//         className={`text-md font-medium cursor-pointer bg-neutral-100 px-5 py-4 first:rounded-t border-b last:border-none
//         justify-between flex items-start last:rounded-b ${
//           isOpen ? "text-secondary" : "text-neutral-700"
//         }`}
//       >
//         <div className="w-11/12">
//           <span className="font-bold">Q{index + 1}:</span> {question}
//         </div>
//         <FaChevronDown className={`${isOpen && 'rotate-180'} w-1/12 transition-transform`} />
//       </motion.div>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key="answer"
//             className="text-neutral-600 leading-7 "
//             initial={{ opacity: 0, height: 0}}
//             animate={{
//               opacity: 1,
//               height: "auto",

//             }}
//             exit={{ opacity: 0, height: 0}}
//           >
//             <div className="px-5 py-5">
//               <span className="font-semibold">Ans:</span> {answer}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Accordion;
