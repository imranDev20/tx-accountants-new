import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allStrapiPage {
        nodes {
          slug
          strapi_id
          title
        }
      }
    }
  `);

  const menuItems = data.allStrapiPage.nodes;

  return (
    <div>
      {menuItems.map((menuItem) => (
        <Link
          className="mx-4 text-white"
          key={menuItem.strapi_id}
          to={menuItem.slug === "home" ? `/` : `/${menuItem.slug}/`}
        >
          {menuItem.title}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
