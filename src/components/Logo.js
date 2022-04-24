import React from "react";
import LogoImage from "../images/logo-svg.svg";
import { Link } from "gatsby";

const Logo = () => {
  return (
    <Link to="/" className="w-48 inline-block">
      <img className="w-full h-full object-contain" src={LogoImage} alt="" />
    </Link>
  );
};

export default Logo;
