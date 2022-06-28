import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Burger from "./Burger";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary fixed py-4 top-0 z-40 w-full">
      <div className="max-w-6xl mx-auto px-10 flex items-center justify-between">
        <Logo />
        <Navigation open={open} />
        <Burger open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
