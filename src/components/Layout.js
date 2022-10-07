import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "nprogress/nprogress.css";
import ScrollToTop from "./ScrollToTop";
import InfoStrip from "./InfoStrip";
import Companies from "./Companies";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main
        // initial={{
        //   opacity: 0,
        //   // x: -200,
        // }}
        // animate={{
        //   opacity: 1,
        //   // x: 0,
        // }}
        // exit={{
        //   opacity: 0,
        //   // x: 200,
        // }}
        // transition={{
        //   type: "spring",
        //   mass: 0.35,
        //   stiffness: 75,
        //   duration: 0.3,
        // }}
        className="min-h-screen"
      >
        {children}
        <Companies />
        <InfoStrip />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
