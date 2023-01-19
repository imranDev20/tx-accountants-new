import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query AboutPageIntroductionQuery {
      allContentfulSections(
        filter: { identifier: { in: ["about-introduction", "about-work"] } }
        sort: { fields: createdAt, order: ASC }
      ) {
        nodes {
          id
          title
          description {
            description
          }
          background {
            gatsbyImage(width: 1920, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const introduction = data?.allContentfulSections?.nodes;

  const image = introduction?.find((item) => item?.background).background
    ?.gatsbyImage;
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage
      {...bgImage}
      loading="lazy"
      className="about-us-bg"
      Tag="section"
    >
      <div className="relative before:content-[''] before:absolute before:bg-primary/60 before:h-full before:w-full before:top-0 before:left-0 py-5">
        <div className="max-w-5xl mx-auto z-20 relative">
          {introduction.map((item) => (
            <div className="mb-5 text-white" key={item.id}>
              <SectionTitle className="text-2xl mb-4 font-semibold ">
                {item?.title}
              </SectionTitle>
              <SectionText>{item?.description?.description}</SectionText>
            </div>
          ))}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Introduction;
