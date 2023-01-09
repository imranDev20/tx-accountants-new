// import { graphql, useStaticQuery } from "gatsby";

// export const useNewsQuery = () => {
//   const data = useStaticQuery(graphql`
//     query NewsPageQuery {
//       allStrapiBlog(sort: { fields: publishedAt, order: DESC }) {
//         nodes {
//           strapi_id
//           title
//           slug
//           excerpt
//           publishedAt(formatString: "DD MMMM, YYYY")
//           content {
//             data {
//               content
//             }
//           }
//           author {
//             displayName
//           }
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(
//                   formats: NO_CHANGE
//                   layout: FULL_WIDTH
//                   placeholder: BLURRED
//                 )
//               }
//             }
//           }
//         }
//       }
//       site {
//         siteMetadata {
//           author
//           siteUrl
//           title
//         }
//       }
//     }
//   `);
//   return data;
// };
