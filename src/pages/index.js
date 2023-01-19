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
const Achievements = loadable(() => import("../components/Achievements"));
const News = loadable(() => import("../components/News"));
const Features = loadable(() => import("../components/Features"));
const WhatWeDo = loadable(() => import("../components/WhatWeDo"));
const Testimonial = loadable(() => import("../components/Testimonial"));
const PricingPlan = loadable(() => import("../components/PricingPlan"));

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [slideTo, setSlideTo] = useState(0);

  return (
    <Layout>
      <Seo title="Home" />
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <About />
      <WhatWeDo />
      <Features />
      <Achievements />
      <PricingPlan />
      <News />

      <Contact />
      <Testimonial
        refresh={refresh}
        setRefresh={setRefresh}
        showModal={showTestimonialModal}
        setShowModal={setShowTestimonialModal}
        testimonials={testimonials}
        slideTo={slideTo}
        setTestimonials={setTestimonials}
      />
      <TestimonialModal
        refresh={refresh}
        setRefresh={setRefresh}
        showModal={showTestimonialModal}
        setShowModal={setShowTestimonialModal}
        testimonials={testimonials}
        setTestimonials={setTestimonials}
        setSlideTo={setSlideTo}
      />
      <AppointmentModal showModal={showModal} setShowModal={setShowModal} />
    </Layout>
  );
};

export default IndexPage;
