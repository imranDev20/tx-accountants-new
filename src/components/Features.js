import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import FeaturesPoints from "./FeaturesPoints";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getImage } from "gatsby-plugin-image";
import { BgImage, convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Features = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      contentfulSections(identifier: { eq: "home-features" }) {
        id
        background {
          gatsbyImage(width: 720, placeholder: BLURRED)
        }
        title
      }
      allContentfulFeatures(sort: { order: ASC, fields: featuresId }) {
        nodes {
          name
          featuresId
          icon {
            url
          }
        }
      }
    }
  `);

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animateTitle = useAnimation();

  if (inView) {
    animateTitle.start({
      x: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1, bounce: 0.5 },
    });
  }
  if (!inView) {
    animateTitle.start({
      x: 100,
      opacity: 0,
    });
  }

  const featuresData = data?.contentfulSections;
  const featuresPoints = data?.allContentfulFeatures?.nodes;

  const image = featuresData.background.gatsbyImage;
  const bgImage = convertToBgImage(image);

  return (
    <section className="bg-primary">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row  text-white">
        <div className="w-full h-screen max-h-[610px] relative lg:w-1/2 before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-primary/60 before:z-10">
          <BackgroundImage className="why-us-bg" {...bgImage} />
        </div>

        <div className="w-full pl-10 pr-10 lg:w-1/2 lg:max-w-xl py-20">
          <motion.h2
            ref={ref}
            animate={animateTitle}
            className="text-3xl font-semibold text-center lg:text-left"
          >
            {featuresData.title}
          </motion.h2>
          <div className="mt-10">
            {featuresPoints.map((point, index) => {
              return (
                <FeaturesPoints
                  key={point?.featuresId}
                  point={point}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
