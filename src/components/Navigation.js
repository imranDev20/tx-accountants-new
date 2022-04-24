import React from "react";
import { AnchorButton } from "./Button";
import Menu from "./Menu";
import { FaPhoneAlt } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="flex static items-center transition-all duration-200">
      <Menu />
      <AnchorButton icon={<FaPhoneAlt />} href="tel:321831091">
        Call Us
      </AnchorButton>
    </nav>
  );
};

export default Navigation;
