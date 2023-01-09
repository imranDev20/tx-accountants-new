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
      contentfulSections(identifier: { eq: "home-contact" }) {
        id
        button
        identifier
        title
        description {
          description
        }
        background {
          gatsbyImage(placeholder: BLURRED, width: 1920)
        }
      }
    }
  `);

  const contactData = data.contentfulSections;

  const image = contactData.background.gatsbyImage;
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
            {contactData.title}
          </SectionTitle>

          <SectionText className="text-white text-lg text-center max-w-3xl mx-auto my-5  leading-normal">
            {contactData.description.description}
          </SectionText>
          <Form />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Contact;
