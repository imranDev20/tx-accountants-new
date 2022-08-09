import React from "react";
import Form from "./Form";
import { BgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      strapiPage(title: { eq: "Home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_CONTACT {
            id
            contactHeader {
              sectionDetails
              sectionTitle
            }
            contactBg {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <BgImage
      image={getImage(data?.strapiPage?.blocks[7]?.contactBg?.localFile)}
      loading="lazy"
      Tag="section"
    >
      <div className="relative before:content-[''] before:absolute before:bg-primary/60 before:h-full before:w-full before:top-0 before:left-0">
        <div className="max-w-2xl mx-auto relative py-20 px-10 ">
          <SectionTitle className="text-center text-3xl font-semibold mb-5 text-white">
            {data?.strapiPage?.blocks[7]?.contactHeader?.sectionTitle}
          </SectionTitle>

          <SectionText className="text-white text-lg text-center max-w-3xl mx-auto my-5  leading-normal">
            {data?.strapiPage?.blocks[7]?.contactHeader?.sectionDetails}
          </SectionText>
          <Form />
        </div>
      </div>
    </BgImage>
  );
};

export default Contact;
