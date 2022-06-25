import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CounterBlock = ({ target, title, duration, icon, symbol }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className=" text-center flex flex-col items-center" ref={ref}>
      <div className="w-16 mb-5">
        <img src={icon} alt="" />
      </div>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        // separator="."
        useEasing={true}
      >
        {({ countUpRef }) => (
          <div className="flex items-center">
            <span className="text-5xl font-semibold" ref={countUpRef} />
            <span className="text-4xl font-semibold ml-1">{symbol}</span>
          </div>
        )}
      </CountUp>
      <p className={`font-medium text-lg animation delay mt-5`}>{title}</p>
    </div>
  );
};

export default CounterBlock;
