import { graphql, useStaticQuery } from "gatsby";

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allContentfulPages(sort: { fields: pageId, order: ASC }) {
        nodes {
          slug
          title
          pageId
        }
      }
    }
  `);
  return data;
};
