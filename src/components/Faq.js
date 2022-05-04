import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "../styles/accordion.css";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "What harsh truths do you prefer to ignore?",
      answer:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 2,
      question: "What harsh truths do you prefer to ignore?",
      answer:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 3,
      question: "What harsh truths do you prefer to ignore?",
      answer:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 4,
      question: "What harsh truths do you prefer to ignore?",
      answer:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white ">
      <div className="px-20 container mx-auto flex">
        <div className="w-1/3">
          <h2 className="text-neutral-700 text-3xl font-semibold mb-10">
            Frequent Asked Questions
          </h2>
          <p className="text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            labore iste, earum ipsam enim sapiente eaque cumque deserunt fuga
            similique?
          </p>
        </div>
        <Accordion className="accordion w-2/3">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id}>
              <AccordionItemHeading>
                <AccordionItemButton>{faq.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
