import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useAnimation, motion } from "framer-motion";

const CounterBlock = ({ target, title, duration, icon, symbol }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const animation = useAnimation();

  if (inView) {
    animation.start({
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.5 },
    });
  }
  if (!inView) {
    animation.start({
      opacity: 0,
      scale: 0.7,
    });
  }

  return (
    <div className=" text-center flex flex-col items-center my-10">
      <motion.div animate={animation} ref={ref} className="w-16 mb-5">
        <img src={icon} alt="" />
      </motion.div>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        // separator="."
        useEasing={true}
      >
        {({ countUpRef }) => (
          <div className="flex items-center" ref={ref}>
            <span className="text-5xl font-semibold" ref={countUpRef} />
            <span className="text-4xl font-semibold ml-1">{symbol}</span>
          </div>
        )}
      </CountUp>
      <motion.p
        animate={animation}
        ref={ref}
        className={`font-medium text-lg animation delay mt-5`}
      >
        {title}
      </motion.p>
    </div>
  );
};

export default CounterBlock;
