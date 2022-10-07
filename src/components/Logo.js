import React from "react";
import LogoImage from "../images/tx-logo.svg";
import { Link } from "gatsby";

const Logo = ({isHidden}) => {
  return (
    <Link to="/" className={`${isHidden ? 'w-52' :'w-64'} inline-block ${isHidden && 'xl:hidden mt-10 xl:mt-0 mb-10 xl:mb-0'} `}>
      <img className="w-full h-full object-contain" src={LogoImage} alt="" />
    </Link>
  );
};

export default Logo;
