import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Burger from "./Burger";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary py-4 px-5 top-0 z-40 w-full sticky">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo />
        <Navigation open={open} />
        <Burger open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
