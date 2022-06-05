const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allStrapiBlog {
        nodes {
          slug
        }
      }
    }
  `);
  data?.allStrapiBlog?.nodes.forEach((node) => {
    actions.createPage({
      path: "/news/" + node?.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: node?.slug },
    });
  });
};
