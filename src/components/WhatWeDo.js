import React, { useEffect } from "react";
import WorkCard from "./WorkCard";
import { LinkButton } from "./Button";
import { useStaticQuery, graphql } from "gatsby";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const WhatWeDo = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const animationParagraph = useAnimation();
  const animationHeading = useAnimation();
  const animationButton = useAnimation();

  if (inView) {
    animationHeading.start({
      scale: 1,
      opacity: 1,
      transition: { type: "spring" },
    });
    animationParagraph.start({
      scale: 1,
      opacity: 1,
      transition: { type: "spring" },
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

  const data = useStaticQuery(graphql`
    query ServicesQuery {
      strapiPage(title: { eq: "Home" }) {
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_SERVICES {
            servicesIconStack {
              strapi_id
              stackText
              stackIcon {
                strapi_id
                alternativeText
                localFile {
                  publicURL
                  url
                  extension
                  # childImageSharp {
                  #   gatsbyImageData
                  # }
                }
              }
            }
          }
        }
      }
    }
  `);

  const servicesData = data.strapiPage.blocks[2].servicesIconStack;

  return (
    <section className="bg-neutral-100 w-full py-14">
      <div className="max-w-5xl mx-auto  ">
        <motion.h2
          animate={animationHeading}
          ref={ref}
          className={`text-center capitalize text-secondary-dark text-3xl font-semibold `}
        >
          What we do
        </motion.h2>
        <motion.p
          animate={animationParagraph}
          ref={ref}
          className="text-neutral-600 mt-5 mx-auto text-center leading-loose"
        >
          We are working together with entrepreneurs and private individuals
          achieve their goal through our personalized services and cutting-edge
          accounting software which automates the major accounting process. We
          have built a significant expertise to identify and implementing cost
          cutting exercise and increase your revenue instead just providing the
          contemporary year-end accounting services. Our dedicated accountant
          will be in touch with you time to time to support your business and
          update you with regulatory changes. We are open 7 days a week. We
          offer fixed fee pricing in all aspect of our bookkeeping and
          accounting services, so you will never have to be surprised with
          unexpected bill.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 my-10">
          {servicesData.map((service, i) => (
            <WorkCard
              key={service.strapi_id}
              index={i}
              inView={inView}
              name={service.stackText}
              icon={service.stackIcon.localFile.url}
            />
          ))}
        </div>

        <LinkButton
          className="justify-center items-center "
          animationButton={animationButton}
          to={`/fixed-fee-pricing/`}
        >
          View Our Pricing Plan
        </LinkButton>
      </div>
    </section>
  );
};

export default WhatWeDo;
