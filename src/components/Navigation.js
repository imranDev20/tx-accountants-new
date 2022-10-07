import React from "react";
import { AnchorButton } from "./Button";
import Menu from "./Menu";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "./Logo";

const Navigation = ({ open }) => {
  return (
    <nav
      className={`xl:static flex flex-col justify-start xl:flex-row items-center  duration-200 fixed top-1/2 ${
        open ? "left-1/2" : " -left-full"
      } -translate-x-1/2 xl:translate-x-0 -translate-y-1/2 xl:translate-y-0 bg-primary xl:bg-transparent w-full xl:w-auto h-screen xl:h-auto transition-all`}
    >
      <Logo isHidden />
      <Menu />
      <AnchorButton
        className={`ml-0 xl:ml-5 mt-16 xl:mt-0`}
        icon={<FaPhoneAlt />}
        href="tel:321831091"
      >
        Call Us
      </AnchorButton>
    </nav>
  );
};

export default Navigation;
