import React from "react";
import { AnchorButton } from "./Button";
import Menu from "./Menu";
import { FaPhoneAlt } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="lg:flex static items-center transition-all duration-200 hidden">
      <Menu />
      <AnchorButton icon={<FaPhoneAlt />} href="tel:321831091">
        Call Us
      </AnchorButton>
    </nav>
  );
};

export default Navigation;
