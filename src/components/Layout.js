import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "nprogress/nprogress.css";
import ScrollToTop from "./ScrollToTop";
import InfoStrip from "./InfoStrip";
import Companies from "./Companies";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="mt-[83px] min-h-screen">{children}</main>
      <Companies />
      <InfoStrip />
      <Footer />
    </>
  );
};

export default Layout;
