import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-primary fixed py-4 top-0 z-40 w-full">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
