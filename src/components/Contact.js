import React from "react";
import Form from "./Form";
import { BgImage, convertToBgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";
import BackgroundImage from "gatsby-background-image";
import sanitizeHtml from "sanitize-html";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      strapiPage(title: { eq: "Home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_CONTACT {
            id
            contactHeader {
              title
              content {
                data {
                  content
                }
              }
            }
            contactBg {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  `);

  const image = getImage(data?.strapiPage?.blocks[7]?.contactBg?.localFile);
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage
      {...bgImage}
      loading="lazy"
      className="contact-bg"
      Tag="section"
    >
      <div className="relative before:content-[''] before:absolute before:bg-primary/60 before:h-full before:w-full before:top-0 before:left-0">
        <div className="max-w-2xl mx-auto relative py-20 px-10 ">
          <SectionTitle className="text-center text-3xl font-semibold mb-5 text-white">
            {data?.strapiPage?.blocks[7]?.contactHeader?.title}
          </SectionTitle>

          <SectionText className="text-white text-lg text-center max-w-3xl mx-auto my-5  leading-normal">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  data?.strapiPage?.blocks[7]?.contactHeader?.content.data
                    .content
                ),
              }}
            ></div>
          </SectionText>
          <Form />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Contact;
