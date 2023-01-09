import React from "react";
import Layout from "../components/Layout";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import WorkCard from "../components/WorkCard";
import { LinkButton } from "../components/Button";
import Seo from "../components/Seo";
import Services from "../components/Services";
import HomeServicesHeader from "../components/HomeServicesHeader";

const ServicesPage = () => {
  const animationButton = useAnimation();
  return (
    <Layout>
      <Seo title="Fixed Fee Pricing" />
      <section className="bg-neutral-100 w-full py-14 px-10">
        <div className="max-w-5xl mx-auto">
          <HomeServicesHeader />
          <Services />
          <LinkButton
            className="justify-center items-center "
            animationButton={animationButton}
            to={`/fixed-fee-pricing/`}
          >
            View Our Pricing Plan
          </LinkButton>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
