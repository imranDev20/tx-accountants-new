import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
