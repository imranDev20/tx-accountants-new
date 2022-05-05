import React from "react";
import WorkCard from "./WorkCard";
import { LinkButton } from "./Button";
import { useStaticQuery, graphql } from "gatsby";

import { useInView } from "react-intersection-observer";

const WhatWeDo = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const data = useStaticQuery(graphql`
    query ServicesQuery {
      strapiPage(strapi_id: { eq: 1 }) {
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
                  childImageSharp {
                    gatsbyImageData
                  }
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
      <div className="container mx-auto px-20">
        <h2
          className={`text-center capitalize text-secondary-dark text-3xl font-semibold `}
        >
          What we do
        </h2>
        <p className="text-neutral-600 mt-5 mx-auto text-center leading-loose">
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
        </p>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 my-10"
        >
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
        <LinkButton to={`/fixed-fee-pricing/`}>
          View Our Pricing Plan
        </LinkButton>
      </div>
    </section>
  );
};

export default WhatWeDo;
