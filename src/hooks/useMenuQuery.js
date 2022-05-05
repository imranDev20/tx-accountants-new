import { graphql, useStaticQuery } from "gatsby";

export const useMenuQuery = () => {
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
  return data;
};
