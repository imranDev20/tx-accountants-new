import { useAnimation, motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useInView } from "react-intersection-observer";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";

const HomeServicesHeader = ({ isHome }) => {
  const data = useStaticQuery(graphql`
    query ServicesHeaderQuery {
      contentfulSections(identifier: { eq: "home-services" }) {
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

  const header = data.contentfulSections;
  console.log(header);
  return (
    <>
      <SectionTitle
        className={`text-center capitalize text-secondary-dark text-3xl font-semibold `}
      >
        {header?.title}
      </SectionTitle>

      {isHome ? (
        <SectionText className="text-neutral-600 mt-5 mx-auto text-justify  leading-normal">
          {header?.description?.description}
        </SectionText>
      ) : null}
    </>
  );
};

export default HomeServicesHeader;
