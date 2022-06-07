import { Link } from "gatsby";
import React from "react";
import { useMenuQuery } from "../hooks/useMenuQuery";

const Menu = () => {
  const data = useMenuQuery();

  const menuItems = data.allStrapiPage.nodes;

  return (
    <div>
      {menuItems.map((menuItem) => (
        <Link
          activeClassName="text-secondary-light"
          className="mx-4 text-white"
          key={menuItem.strapi_id}
          to={menuItem.slug === "home" ? `/` : `/${menuItem.slug}`}
        >
          {menuItem.title}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
