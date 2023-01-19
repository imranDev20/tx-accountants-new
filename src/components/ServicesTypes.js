import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import ServiceTypeSections from "./ServiceTypeSections";

const ServicesTypes = () => {
  const data = useStaticQuery(graphql`
    query ServicesTypesQuery {
      sections: allContentfulSections(
        filter: {
          identifier: {
            in: [
              "services-more"
              "services-company"
              "services-tax"
              "services-accounting"
            ]
          }
        }
        sort: { fields: createdAt, order: ASC }
      ) {
        nodes {
          title
          id
          background {
            gatsbyImageData
          }
          description {
            description
          }
        }
      }
    }
  `);

  const header = data?.sections?.nodes[0];
  const types = data?.sections?.nodes?.slice(1);

  return (
    <section className="max-w-5xl mx-auto my-20">
      <SectionTitle className="text-neutral-700 text-3xl font-semibold mb-5 text-center ">
        {header?.title}
      </SectionTitle>
      <SectionText className="text-center text-neutral-600">
        {header?.description?.description}
      </SectionText>

      {types?.map((item, index) => (
        <ServiceTypeSections index={index} item={item} />
      ))}
    </section>
  );
};

export default ServicesTypes;
