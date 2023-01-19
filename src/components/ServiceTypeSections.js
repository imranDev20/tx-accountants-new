import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ServiceTypeSections = ({ item, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animatePoints = useAnimation();

  useEffect(() => {
    if (inView) {
      animatePoints.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: 0.3,
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animatePoints.start({
        x: index % 2 === 0 ? 100 : -100,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      key={item.id}
      animate={animatePoints}
      className={`flex flex-col my-20 px-5 ${
        index % 2 === 0 ? `lg:flex-row` : "lg:flex-row-reverse"
      } items-center`}
    >
      <div className="lg:w-1/2 w-full mb-10">
        <GatsbyImage
          imgClassName="rounded"
          image={item?.background?.gatsbyImageData}
        />
      </div>

      <div className={`lg:w-1/2 w-full ${index % 2 === 0 ? `pl-8` : `pr-8`} `}>
        <h2 className="text-2xl text-secondary-dark mb-3 font-medium">
          {item?.title}
        </h2>

        <ReactMarkdown
          className="text-neutral-600 leading-normal text-justify"
          components={{
            p: React.Fragment,
          }}
        >
          {item?.description?.description}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default ServiceTypeSections;
