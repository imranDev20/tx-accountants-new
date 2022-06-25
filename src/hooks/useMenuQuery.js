import { graphql, useStaticQuery } from "gatsby";

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allStrapiPage(sort: { fields: strapi_id, order: ASC }) {
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
