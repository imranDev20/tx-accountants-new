import { graphql, useStaticQuery } from "gatsby";

export const useNewsQuery = () => {
  const data = useStaticQuery(graphql`
    query NewsPageQuery {
      allStrapiBlog {
        nodes {
          strapi_id
          title
          slug
          publishedAt(formatString: "DD MMMM, YYYY")
          content {
            data {
              content
            }
          }
          author {
            displayName
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: NO_CHANGE
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `);
  return data;
};
