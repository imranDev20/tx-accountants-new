import React, { useState } from "react";
import loadable from "@loadable/component";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import TestimonialModal from "../components/TestimonialModal";

const About = loadable(() => import("../components/About"));
const AppointmentModal = loadable(() =>
  import("../components/AppointmentModal")
);
const Contact = loadable(() => import("../components/Contact"));
const Counter = loadable(() => import("../components/Counter"));
const News = loadable(() => import("../components/News"));
const WhyUs = loadable(() => import("../components/WhyUs"));
const WhatWeDo = loadable(() => import("../components/WhatWeDo"));
const Testimonial = loadable(() => import("../components/Testimonial"));
const PricingPlan = loadable(() => import("../components/PricingPlan"));

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

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
      <Testimonial
        refresh={refresh}
        setRefresh={setRefresh}
        showModal={showTestimonialModal}
        setShowModal={setShowTestimonialModal}
      />
      <TestimonialModal
        refresh={refresh}
        setRefresh={setRefresh}
        showModal={showTestimonialModal}
        setShowModal={setShowTestimonialModal}
      />
      <AppointmentModal showModal={showModal} setShowModal={setShowModal} />
    </Layout>
  );
};

export default IndexPage;
