import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-[83px] min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
