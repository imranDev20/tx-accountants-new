import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ReactMarkdown from "react-markdown";

const TestimonialCard = ({ name, text }) => {
  return (
    <div className="shadow-lg bg-white p-5 rounded-lg">
      <p className="text-neutral-600">
        <ImQuotesLeft className="inline-block mb-2 mr-1 text-neutral-700" />{" "}
        <ReactMarkdown
          components={{
            p: React.Fragment,
          }}
        >
          {text}
        </ReactMarkdown>{" "}
        <ImQuotesRight className="inline-block mb-2 ml-1 text-neutral-700" />{" "}
      </p>
      <div className="mt-2 flex justify-end items-center relative">
        <h4 className="text-lg font-semibold text-secondary-dark relative before:content-[''] before:block before:w-5 before:h-0.5 before:bg-secondary-dark before:left-[-25px] before:top-1/2 before:absolute before:rounded-lg">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
