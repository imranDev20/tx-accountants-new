import { useStaticQuery, graphql } from "gatsby";

export const useArticleQuery = () => {
  const data = useStaticQuery(graphql`
    query ArticleQuery {
      articleData: allStrapiArticle {
        edges {
          node {
            title
            strapi_id
            publishedAt
            openingHours {
              hours
              days
            }
            description {
              data {
                description
              }
            }
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);
  return data;
};
