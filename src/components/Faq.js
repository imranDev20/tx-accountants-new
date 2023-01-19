import React from "react";
import Accordion from "./Accordion";
import sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";
import "../styles/accordion.css";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { graphql, useStaticQuery } from "gatsby";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";

const Faq = () => {
  const data = useStaticQuery(graphql`
    query FaqQuery {
      headers: contentfulSections(identifier: { eq: "about-faq" }) {
        id
        description {
          description
        }
        title
      }
      faqs: allContentfulFaq(sort: { order: ASC, fields: createdAt }) {
        nodes {
          title
          id
          answer {
            answer
          }
        }
      }
    }
  `);

  const faqs = data?.faqs?.nodes;

  const {
    title,
    description: { description },
  } = data?.headers;

  return (
    <section className="w-full py-20 bg-white px-10 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="w-full mb-16 text-center">
          <SectionTitle className="text-neutral-700 text-3xl font-semibold mb-5">
            {title}
          </SectionTitle>
          <SectionText>{description}</SectionText>
        </div>
        <div className="w-full max-w-4xl mx-auto border rounded">
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              question={faq?.title}
              answer={faq?.answer?.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
