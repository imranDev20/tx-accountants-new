import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { LinkButton } from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      strapiPage {
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_ABOUT {
            aboutButton {
              label
              link
            }
            aboutHeader {
              sectionTitle
              sectionDetails
            }
          }
        }
      }
    }
  `);

  const aboutData = data?.strapiPage?.blocks[1];

  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationParagraph = useAnimation();
  const animationHeading = useAnimation();
  const animationButton = useAnimation();

  // Framer InView UseEffect
  useEffect(() => {
    if (inView) {
      animationHeading.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring" },
      });
      animationParagraph.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", delay: 0.2 },
      });
      animationButton.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", delay: 0.4 },
      });
    }
    if (!inView) {
      animationHeading.start({
        opacity: 0,
        scale: 0.8,
      });
      animationParagraph.start({
        opacity: 0,
        scale: 0.8,
      });
      animationButton.start({
        opacity: 0,
        scale: 0.8,
      });
    }
  }, [inView, animationButton, animationHeading, animationParagraph]);

  return (
    <section className="mt-[100vh] bg-white w-full border-t-4 border-secondary py-[70px]">
      <div className="container mx-auto px-20 text-center">
        <motion.h2
          ref={ref}
          animate={animationHeading}
          className={`text-neutral-700 text-3xl font-semibold `}
        >
          {aboutData?.aboutHeader?.sectionTitle}
        </motion.h2>
        <motion.p
          ref={ref}
          animate={animationParagraph}
          className="text-neutral-600 max-w-3xl mx-auto mt-5 leading-loose"
        >
          {aboutData?.aboutHeader?.sectionDetails}
        </motion.p>

        <LinkButton to={`/${aboutData.aboutButton.link}`}>
          {aboutData?.aboutButton?.label}
        </LinkButton>
      </div>
    </section>
  );
};

export default About;
