import React from "react";
import loadable from "@loadable/component";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Targets from "../components/Targets";
import Introduction from "../components/Introduction";
const Faq = loadable(() => import("../components/Faq"));

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Introduction />
      <Targets />
      <Faq />
    </Layout>
  );
};

export default AboutPage;
