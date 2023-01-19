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
import ServicesTypes from "../components/ServicesTypes";

const ServicesPage = () => {
  const animationButton = useAnimation();
  return (
    <Layout>
      <Seo title="Fixed Fee Pricing" />
      <section className="bg-background pb-20">
        <h1 className="bg-secondary text-center text-white py-5 text-3xl font-medium mb-10 relative z-10">
          Our Services
        </h1>
        <div className="max-w-5xl mx-auto">
          <HomeServicesHeader />
          <Services />
          <LinkButton
            className="justify-center items-center "
            animationButton={animationButton}
            to={`/fixed-fee/`}
          >
            View Our Pricing Plan
          </LinkButton>
        </div>
      </section>
      <ServicesTypes />
    </Layout>
  );
};

export default ServicesPage;
