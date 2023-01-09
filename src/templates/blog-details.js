import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { FaUserCircle, FaClock } from "react-icons/fa";
import NewsCard from "../components/NewsCard";
import BlogBodyRenderer from "../components/BlogBodyRenderer";

const BlogDetails = ({ data }) => {
  const { title, body, updatedAt, authorName } = data?.contentfulBlogs;

  const updateDate = new Date(Date.parse(updatedAt)).toLocaleString();
  console.log(updateDate);

  return (
    <Layout>
      <Seo title={title} />
      <section className="max-w-5xl mx-auto px-5 lg:  py-6">
        <div className="my-6">
          <Link
            className="inline-block text-neutral-700 hover:text-secondary"
            to="/news/"
          >
            All Posts
          </Link>
        </div>
        <div className="px-5 md:px-20 lg:  py-14 border">
          <div className="flex items-center text-neutral-700">
            <span className="mr-5 flex items-center text-sm">
              <FaUserCircle className="mr-2" />
              {authorName}
            </span>
            <span className="flex items-center text-sm">
              <FaClock className="mr-2" />
              {updateDate}
            </span>
          </div>

          <div className="text-neutral-700">
            <h1 className="text-4xl my-2 leading-snug font-semibold">
              {title}
            </h1>
          </div>
          <BlogBodyRenderer body={body} />
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-20 py-5 px-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-neutral-700 text-2xl font-medium">
            Recent Posts
          </h2>
          <Link className="underline text-secondary-dark" to="/news">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* {recentBlogs?.slice(0, 3).map((recentBlog) => (
            <NewsCard
              key={recentBlog?.strapi_id}
              title={recentBlog?.title}
              slug={recentBlog?.slug}
              isRecent
              image={getImage(recentBlog?.image[0]?.localFile)}
            />
          ))} */}
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;

export const query = graphql`
  query BlogDetailsQuery($slug: String) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      updatedAt
      authorName
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
      featuredImage {
        gatsbyImageData(width: 1280, placeholder: BLURRED)
      }
      slug
      createdAt
    }
  }
`;
