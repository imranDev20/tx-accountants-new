import React from "react";
import Accordion from "./Accordion";

import "../styles/accordion.css";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { graphql, useStaticQuery } from "gatsby";

const Faq = () => {
  const data = useStaticQuery(graphql`
    query FaqQuery {
      strapiPage(slug: { eq: "home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_FAQ {
            id
            faqStack {
              id
              faqQues
              faqAns
            }
            faqHeader {
              sectionTitle
              sectionDetails
            }
          }
        }
      }
    }
  `);

  const faqs = data?.strapiPage?.blocks[6]?.faqStack;

  const { sectionTitle, sectionDetails } =
    data?.strapiPage?.blocks[6]?.faqHeader;

  console.log(faqs);

  return (
    <section className="w-full py-20 bg-white px-10">
      <div className="max-w-5xl mx-auto flex xl:flex-row flex-col items-center xl:items-start justify-between">
        <div className="w-full xl:w-1/3 mb-7">
          <h2 className="text-neutral-700 text-3xl font-semibold mb-5">
            {sectionTitle}
          </h2>
          <p className="text-neutral-600">{sectionDetails}</p>
        </div>
        <div className="lg:w-1/2 w-full max-w-lg border rounded">
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              question={faq?.faqQues}
              answer={faq?.faqAns}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
