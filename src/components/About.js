import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { LinkButton } from "./Button";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulSections(identifier: { eq: "home-about" }) {
        id
        button
        identifier
        title
        description {
          description
        }
      }
    }
  `);
  const aboutData = data?.contentfulSections;

  const { inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
    <section className="bg-white w-full border-t-4 border-secondary py-[70px] px-10">
      <div className="max-w-5xl mx-auto text-center">
        <SectionTitle className={`text-neutral-700 text-3xl font-semibold `}>
          {aboutData?.title}
        </SectionTitle>

        <SectionText className="text-neutral-600 max-w-3xl mx-auto mt-5 leading-normal">
          {aboutData.description.description}
        </SectionText>
      </div>
      <div>
        <LinkButton className="flex items-center justify-center" to="/about-us">
          More About Us
        </LinkButton>
      </div>
    </section>
  );
};

export default About;
