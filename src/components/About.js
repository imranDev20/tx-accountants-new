import React, { useEffect } from "react";
import { LinkButton } from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1.0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        scale: 0.5,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section className="mt-[100vh] bg-white w-full border-t-4 border-secondary py-[70px]">
      <div ref={ref} className="container mx-auto px-20 text-center">
        <motion.h2
          animate={animation}
          className={`text-neutral-700 text-3xl font-semibold `}
        >
          Welcome to <span className="text-secondary">TX Accountants</span>
        </motion.h2>
        <motion.p
          // transition={{ }}
          // initial={{ scale: 0.5, opacity: 0 }}
          animate={animation}
          className="text-neutral-600 max-w-3xl mx-auto mt-5"
        >
          We help sole proprietors, self-employed consultants, start-ups and
          small-to-midsize organizations with a full suite of affordable tax and
          accounting services.
        </motion.p>
        <LinkButton to="/about-us/">More About Us</LinkButton>
      </div>
    </section>
  );
};

export default About;
