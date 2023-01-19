import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";

const Targets = () => {
  const { targets } = useStaticQuery(graphql`
    query AboutTargetsQuery {
      targets: allContentfulSections(
        filter: { identifier: { in: ["about-vision", "about-tech"] } }
        sort: { fields: createdAt, order: ASC }
      ) {
        nodes {
          id
          contentful_id
          title
          description {
            description
          }
          background {
            url
          }
        }
      }
    }
  `);
  console.log(targets);
  return (
    <section className="px-10">
      <div className="max-w-4xl mx-auto mt-16">
        {targets?.nodes?.map((item) => (
          <div className="flex xl:flex-row flex-col mb-10">
            <div className="xl:w-1/3 w-full mb-5">
              <img
                className="w-full h-full max-w-[145px]"
                src={item.background.url}
                alt={item.title}
              />
            </div>
            <div className="xl:w-2/3 w-full">
              <SectionTitle className="text-3xl text-secondary-dark mb-2 font-medium">
                {item.title}
              </SectionTitle>

              <SectionText
                className={`text-neutral-600  leading-normal text-justify`}
              >
                {item?.description?.description}
              </SectionText>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Targets;
