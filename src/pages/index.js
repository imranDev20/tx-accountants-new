import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import News from "../components/News";
import PricingPlan from "../components/PricingPlan";
import Seo from "../components/Seo";
import WhatWeDo from "../components/WhatWeDo";
import WhyUs from "../components/WhyUs";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <WhatWeDo />
      <WhyUs />
      <PricingPlan />
      <News />
    </Layout>
  );
};

export default IndexPage;
