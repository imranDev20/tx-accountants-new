import React from "react";
import Layout from "../components/Layout";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import WorkCard from "../components/WorkCard";
import { LinkButton } from "../components/Button";
import Seo from "../components/Seo";

const OurServices = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const animationParagraph = useAnimation();
  const animationHeading = useAnimation();
  const animationButton = useAnimation();

  const data = useStaticQuery(graphql`
    query ServicesPageQuery {
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
  return (
    <Layout>
      <Seo title="Fixed Fee Pricing" />
      <section className="bg-background py-20">
        <div className="container mx-auto px-20">
          <motion.h2
            animate={animationHeading}
            ref={ref}
            className={`text-center capitalize text-secondary-dark text-3xl font-semibold `}
          >
            What we do
          </motion.h2>
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
    </Layout>
  );
};

export default OurServices;
