import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import WhatWeDo from "../components/WhatWeDo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <WhatWeDo />
    </Layout>
  );
};

export default IndexPage;
