import React, { useState } from "react";
import About from "../components/About";
import AppointmentModal from "../components/AppointmentModal";
import Contact from "../components/Contact";
import Counter from "../components/Counter";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <Seo title="Home" />
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <About />
      <WhatWeDo />
      <WhyUs />
      <Counter />
      <PricingPlan />
      <News />
      <Contact />
      <Testimonial />
      <Faq />
      <AppointmentModal showModal={showModal} setShowModal={setShowModal} />
    </Layout>
  );
};

export default IndexPage;
