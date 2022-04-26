import React, { useEffect } from "react";
import { LinkButton } from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animationParagraph = useAnimation();
  const animationHeading = useAnimation();
  const animationButton = useAnimation();

  // Framer InView UseEffect
  useEffect(() => {
    if (inView) {
      animationHeading.start({
        scale: 1.0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        },
      });
      animationParagraph.start({
        scale: 1.0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.3,
          bounce: 0.3,
        },
      });
      animationButton.start({
        scale: 1.0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animationHeading.start({
        scale: 0.5,
        opacity: 0,
      });
      animationParagraph.start({
        scale: 0.5,
        opacity: 0,
      });
      animationButton.start({
        scale: 0.5,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section className="mt-[100vh] bg-white w-full border-t-4 border-secondary py-[70px]">
      <div ref={ref} className="container mx-auto px-20 text-center">
        <motion.h2
          animate={animationHeading}
          className={`text-neutral-700 text-3xl font-semibold `}
        >
          Welcome to <span className="text-secondary-dark">TX Accountants</span>
        </motion.h2>
        <motion.p
          animate={animationParagraph}
          className="text-neutral-600 max-w-3xl mx-auto mt-5 leading-loose"
        >
          We help sole proprietors, self-employed consultants, start-ups and
          small-to-midsize organizations with a full suite of affordable tax and
          accounting services.
        </motion.p>
        <LinkButton animationButton={animationButton} to="/about-us/">
          More About Us
        </LinkButton>
      </div>
    </section>
  );
};

export default About;
