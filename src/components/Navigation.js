import React from "react";
import { AnchorButton } from "./Button";
import Menu from "./Menu";
import { FaPhoneAlt } from "react-icons/fa";

const Navigation = ({ open }) => {
  return (
    <nav className="xl:static xl:flex items-center transition-all duration-200 fixed">
      <Menu />
      <AnchorButton icon={<FaPhoneAlt />} href="tel:321831091">
        Call Us
      </AnchorButton>
    </nav>
  );
};

export default Navigation;
