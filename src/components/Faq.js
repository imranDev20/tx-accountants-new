import React from "react";
import Accordion from "./Accordion";
import sanitizeHtml from "sanitize-html";

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
              title
              content {
                data {
                  content
                }
              }
            }
          }
        }
      }
    }
  `);

  const faqs = data?.strapiPage?.blocks[6]?.faqStack;

  const { title, content } = data?.strapiPage?.blocks[6]?.faqHeader;

  console.log(faqs);

  return (
    <section className="w-full py-20 bg-white px-10 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="w-full mb-16 text-center">
          <h2 className="text-neutral-700 text-3xl font-semibold mb-5">
            {title}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(content?.data?.content),
            }}
          />
        </div>
        <div className="w-full max-w-4xl mx-auto border rounded">
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
