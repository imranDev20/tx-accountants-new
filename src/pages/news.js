import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaUserCircle, FaClock, FaHeart } from "react-icons/fa";
import { useNewsQuery } from "../hooks/useNewsQuery";
import ReactMarkdown from "react-markdown";

const NewsPage = () => {
  const { allStrapiBlog } = useNewsQuery();
  const blogs = allStrapiBlog?.nodes;

  return (
    <Layout>
      <Seo title="News" />
      <section className="mx-auto max-w-5xl px-20 py-5">
        {blogs.map((blog) => {
          // Simplyfying
          const blogImage = getImage(blog?.image[0]?.localFile);
          const title = blog?.title;
          const content = blog?.content?.data?.content;

          return (
            <div
              key={blog?.strapi_id}
              className="flex flex-col lg:flex-row my-10 border rounded overflow-hidden"
            >
              <div className="lg:w-1/2 ">
                <Link to={`/news/${blog?.slug}`}>
                  <GatsbyImage
                    className="w-full h-full object-cover"
                    image={blogImage}
                    alt={title}
                  />
                </Link>
              </div>
              <div className="lg:w-1/2 p-7">
                <div className="mb-3 text-neutral-700 text-sm">
                  <p className="flex items-center">
                    <FaUserCircle className="mr-1" />{" "}
                    {blog?.author?.displayName}
                  </p>
                  <p className="flex items-center">
                    <FaClock className="mr-1" /> {blog?.publishedAt}
                  </p>
                </div>

                <Link to={`/news/${blog?.slug}`}>
                  <h4 className="text-3xl my-3 font-medium leading-snug text-neutral-700 hover:text-secondary transition-colors">
                    {title.length > 45 ? title.substring(0, 40) + `...` : title}
                  </h4>
                </Link>

                <p
                  dangerouslySetInnerHTML={{
                    __html: content.substr(0, 130) + "...",
                  }}
                />
                <hr className="h-2 mt-10 mb-3" />
                <div className="flex text-sm justify-between items-center">
                  <div className="flex items-center">
                    <p className="mr-5">17 views</p>
                    <p>0 comments</p>
                  </div>
                  <button>
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default NewsPage;
