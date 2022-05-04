import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import News from "../components/News";
import PricingPlan from "../components/PricingPlan";
import Seo from "../components/Seo";
import Testimonial from "../components/Testimonial";
import WhatWeDo from "../components/WhatWeDo";
import WhyUs from "../components/WhyUs";

const IndexPage = () => {
  // useEffect(() => {
  //   fetch("http://localhost:1337/api/pages?populate[blocks][populate]=%2A")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // http://localhost:1337/api/pages?populate[blocks][populate][servicesIconStack][populate]=stackIcon

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <WhatWeDo />
      <WhyUs />
      <PricingPlan />
      <News />
      <Contact />
      <Testimonial />
      <Faq />
    </Layout>
  );
};

export default IndexPage;
