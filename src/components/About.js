import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { LinkButton } from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import SectionTitle from "./SectionTitle";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      strapiPage(title: { eq: "Home" }) {
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

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const animationParagraph = useAnimation();
  const animationHeading = useAnimation();

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
  }

  return (
    <section className="mt-[calc(100vh-93px)] bg-white w-full border-t-4 border-secondary py-[70px] px-10">
      <div className="max-w-5xl mx-auto text-center">
        <SectionTitle className={`text-neutral-700 text-3xl font-semibold `}>
          {aboutData?.aboutHeader?.sectionTitle}
        </SectionTitle>
        {/* <motion.h2
          ref={ref}
          animate={animationHeading}
          className={``}
        ></motion.h2> */}
        <motion.p
          ref={ref}
          animate={animationParagraph}
          className="text-neutral-600 max-w-3xl mx-auto mt-5 leading-normal"
        >
          {aboutData?.aboutHeader?.sectionDetails}
        </motion.p>

        <LinkButton
          className="justify-center items-center "
          to={`/${aboutData.aboutButton.link}`}
        >
          {aboutData?.aboutButton?.label}
        </LinkButton>
      </div>
    </section>
  );
};

export default About;
