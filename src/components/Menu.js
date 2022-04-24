import { Link } from "gatsby";
import React from "react";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about-us/" },
    { id: 3, name: "Our Services", link: "/our-services/" },
    { id: 4, name: "Fixed Fee Pricing", link: "/fixed-fee-pricing/" },
    { id: 5, name: "Contact Us", link: "/contact-us/" },
    { id: 6, name: "News", link: "/news/" },
  ];

  return (
    <div>
      {menuItems.map((menuItem) => (
        <Link className="mx-4 text-white" key={menuItem.id} to={menuItem.link}>
          {menuItem.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
