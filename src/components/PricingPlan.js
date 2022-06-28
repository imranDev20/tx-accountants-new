import React from "react";
import { LinkButton } from "./Button";
import PricingCard from "./PricingCard";

const PricingPlan = () => {
  const prices = [
    { id: 1, name: "Individual", priceFixed: 150, pricePM: 15 },
    { id: 2, name: "Sole Trader", priceFixed: 150, pricePM: 10 },
    { id: 3, name: "Limited Company", priceFixed: 150, pricePM: 10 },
  ];
  return (
    <section className="bg-neutral-100 py-20 px-10">
      <div className="max-w-5xl mx-auto  ">
        <div className="mb-5">
          <h2 className="text-3xl text-neutral-700 mb-3 font-semibold">
            We Are Faster
          </h2>
          <p className="text-neutral-600 text-justify  leading-normal">
            We have designed our services to easily fit within a busy
            executive's lifestyle through our cloud-based accounting software.
            We understand the importance of deadlines and work quickly to ensure
            each one is met. We know our clients are busy running their
            businesses, so. We guarantee a response to any inquiry within 24
            hours. Our friendly team is committed to delivering fast, efficient
            service with unwavering attention to detail.
          </p>
        </div>
        <div className="mb-5">
          <h2 className="text-3xl text-neutral-700 mb-3 font-semibold">
            We Are Smarter
          </h2>
          <p className="text-neutral-600 text-justify  leading-normal">
            We offer every tax and accounting service a growing business needs
            to succeed, including help with start-up business plans, day-to-day
            running of accounts, payroll, VAT and taxation services and much
            more. Our charter-certified accountants and comprehensive,
            cloud-based software can handle any kind of business accounting
            challenges.
          </p>
        </div>
        <div className="text-center mt-10">
          <h2 className="text-3xl text-secondary-dark mt-14 mb-5 font-semibold">
            Get Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {prices.map((price) => (
              <PricingCard
                key={price.id}
                name={price.name}
                priceFixed={price.priceFixed}
                pricePM={price.pricePM}
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
