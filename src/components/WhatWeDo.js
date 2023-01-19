import React from "react";
import { LinkButton } from "./Button";
import { useInView } from "react-intersection-observer";

import { useAnimation } from "framer-motion";
import Services from "./Services";
import HomeServicesHeader from "./HomeServicesHeader";

const WhatWeDo = () => {
  const animationButton = useAnimation();

  return (
    <section className="bg-neutral-100 w-full py-14 px-10">
      <div className="max-w-5xl mx-auto">
        <HomeServicesHeader isHome />
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
  );
};

export default WhatWeDo;
