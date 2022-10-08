import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { FaUserCircle, FaClock } from "react-icons/fa";
import { useNewsQuery } from "../hooks/useNewsQuery";
import NewsCard from "../components/NewsCard";
import { Disqus } from "gatsby-plugin-disqus";
import sanitizeHtml from "sanitize-html";

const BlogDetails = ({ data }) => {
  const { title, publishedAt, content, slug, strapi_id } = data?.strapiBlog;
  const { displayName } = data?.strapiBlog?.author;
  const blogImage = getImage(data?.strapiBlog?.image[0]?.localFile);

  // Finding Recent
  const { allStrapiBlog, site } = useNewsQuery();
  const currentBlogID = data?.strapiBlog?.strapi_id;

  const recentBlogs = allStrapiBlog?.nodes.filter(
    (recentBlog) => recentBlog?.strapi_id !== currentBlogID
  );

  let disqusConfig = {
    url: `${site.siteMetadata.siteUrl + "news/" + slug}`,
    identifier: slug,
    title: title,
  };

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
              {displayName}
            </span>
            <span className="flex items-center text-sm">
              <FaClock className="mr-2" />
              {publishedAt}
            </span>
          </div>

          <div className="text-neutral-700">
            <h1 className="text-3xl my-2 leading-snug font-medium">{title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(content?.data?.content),
              }}
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-20 px-10">
        {/* <CommentCount config={disqusConfig} placeholder={"..."} /> */}
        <Disqus config={disqusConfig} />
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
          {recentBlogs?.slice(0, 3).map((recentBlog) => (
            <NewsCard
              key={recentBlog?.strapi_id}
              title={recentBlog?.title}
              slug={recentBlog?.slug}
              isRecent
              image={
                recentBlog?.image[0]?.localFile?.childImageSharp
                  ?.gatsbyImageData
              }
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;

export const query = graphql`
  query BlogDetailsQuery($slug: String) {
    strapiBlog(slug: { eq: $slug }) {
      strapi_id
      title
      locale
      publishedAt(formatString: "DD MMMM, YYYY")
      updatedAt
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
            gatsbyImageData
          }
        }
      }
      slug
    }
  }
`;
