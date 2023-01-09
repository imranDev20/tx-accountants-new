const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allContentfulBlogs {
        nodes {
          slug
        }
      }
    }
  `);

  data?.allContentfulBlogs?.nodes.forEach((node) => {
    actions.createPage({
      path: "/news/" + node?.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: node?.slug },
    });
  });
};
