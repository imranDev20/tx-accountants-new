import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { NormalButton } from "./Button";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedText";
import "../styles/animation.css";

const Hero = ({ showModal, setShowModal }) => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      contentfulSections(identifier: { eq: "home-hero" }) {
        id
        button
        title
        description {
          description
        }
        background {
          url
          publicUrl
        }
      }
    }
  `);

  const heroData = data.contentfulSections;

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: heroData.title },
    {
      type: "heading2",
      text: heroData.description.description,
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
    <section className="w-full relative">
      <div className="w-full h-[calc(100vh-93px)] -z-50 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-primary/75">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          width="100%"
        >
          <source src={heroData?.background.url} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-11/12 md:w-1/2">
        <motion.h2 className="font-extrabold my-3 text-3xl  md:text-5xl"></motion.h2>

        <motion.div
          className="hero-animated-text"
          initial="hidden"
          // animate="visible"
          animate={"visible"}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedCharacters {...item} key={index} />;
            })}
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1, delay: 1.2 }}
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <NormalButton
            onClick={() => setShowModal(!showModal)}
            className="px-5 py-3 mt-5"
          >
            {heroData.button}
          </NormalButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
