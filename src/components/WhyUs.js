import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import WhyUsPoints from "./WhyUsPoints";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getImage } from "gatsby-plugin-image";
import { BgImage, convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const WhyUs = () => {
  const data = useStaticQuery(graphql`
    query WhyUsQuery {
      strapiPage(title: { eq: "Home" }) {
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_WHY_US {
            whyUsIconStack {
              stackText
              stackIcon {
                localFile {
                  url
                  publicURL
                }
              }
              strapi_id
            }
            whyUsBg {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG
                    formats: WEBP
                    layout: FULL_WIDTH
                  )
                }
              }
            }
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

  const whyUsPoints = data?.strapiPage?.blocks[4]?.whyUsIconStack;

  const image = getImage(data?.strapiPage?.blocks[4]?.whyUsBg?.localFile);
  const bgImage = convertToBgImage(image);

  return (
    <section className="bg-primary">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row  text-white">
        <div className="w-full h-screen max-h-[610px] relative lg:w-1/2 before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-primary/60 before:z-10">
          <BackgroundImage className="why-us-bg" {...bgImage}></BackgroundImage>
        </div>

        <div className="w-full pl-10 pr-10 lg:w-1/2 lg:max-w-xl py-20">
          <motion.h2
            ref={ref}
            animate={animateTitle}
            className="text-3xl font-semibold text-center lg:text-left"
          >
            Why Us
          </motion.h2>
          <div className="mt-10">
            {whyUsPoints.map((point, index) => {
              return (
                <WhyUsPoints
                  key={point?.strapi_id}
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

export default WhyUs;
