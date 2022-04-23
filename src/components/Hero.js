import React, { useState } from "react";
import { AnchorButton, NormalButton } from "./Button";
import heroVideo from "../videos/money.mp4";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "../styles/animation.css";

const Hero = () => {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "The smartest way" },
    {
      type: "heading2",
      text: "To manage your accounts with us",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <section className="w-full">
      <div className="fixed top-24 lg:top-22 w-full h-[calc(100vh-93px)] -z-50 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-primary/60">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          width="100%"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-11/12 md:w-1/2">
          <motion.h2 className="font-extrabold uppercase my-3 text-3xl  md:text-5xl"></motion.h2>

          <motion.div
            className="hero-animated-text"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1, delay: 1.2 }}
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <NormalButton className="px-5 py-3 mt-5">
              Get an Appointment
            </NormalButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
