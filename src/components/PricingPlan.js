import { useAnimation, motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useInView } from "react-intersection-observer";
import { LinkButton } from "./Button";
import PricingCard from "./PricingCard";
import ReactMarkdown from "react-markdown";

const PricingPlan = () => {
  const data = useStaticQuery(graphql`
    query HomePricingQuery {
      allContentfulSections(
        filter: {
          identifier: { in: ["home-faster", "home-smarter", "home-pricing"] }
        }
      ) {
        nodes {
          title
          description {
            description
          }
        }
      }
      allContentfulPricing(sort: { fields: pricingId, order: ASC }) {
        nodes {
          pricingId
          monthlyPrice
          fixedPrice
          title
        }
      }
    }
  `);

  const content = data?.allContentfulSections?.nodes?.slice(1, 3);

  const pricingHeader = data?.allContentfulSections?.nodes[0];
  const prices = data?.allContentfulPricing?.nodes;

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationTitle = useAnimation();
  const animationText = useAnimation();

  if (inView) {
    animationTitle.start({
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1, bounce: 0.5 },
    });
    animationText.start({
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1, bounce: 0.5 },
    });
  }
  if (!inView) {
    animationTitle.start({
      opacity: 0,
      x: -100,
    });
    animationText.start({
      opacity: 0,
      x: 100,
    });
  }

  return (
    <section className="bg-neutral-100 py-20 px-10">
      <div className="max-w-5xl mx-auto  ">
        {content.reverse().map((item) => (
          <div className="mb-5">
            <motion.h2
              animate={animationTitle}
              ref={ref}
              className="text-3xl text-neutral-700 mb-3 font-semibold"
            >
              {item?.title}
            </motion.h2>
            <motion.p
              animate={animationText}
              ref={ref}
              className="text-neutral-600 text-justify  leading-normal"
            >
              <ReactMarkdown
                components={{
                  p: React.Fragment,
                }}
              >
                {item?.description?.description}
              </ReactMarkdown>
            </motion.p>
          </div>
        ))}

        <div className="text-center mt-10">
          <h2 className="text-3xl text-secondary-dark mt-14 mb-5 font-semibold">
            {pricingHeader.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {prices.map((price) => (
              <PricingCard
                key={price?.pricingId}
                name={price?.title}
                priceFixed={price?.fixedPrice}
                pricePM={price?.monthlyPrice}
              />
            ))}
          </div>
        </div>
        <LinkButton
          className="flex items-center justify-center"
          to="/contact-us/"
        >
          Contact Us Today!
        </LinkButton>
      </div>
    </section>
  );
};

export default PricingPlan;
