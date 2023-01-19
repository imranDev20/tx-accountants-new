import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  FaUserCircle,
  FaClock,
  FaHeart,
  FaEye,
  FaRegEnvelope,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const NewsPage = () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      blogs: allContentfulBlogs {
        nodes {
          id
          authorName
          slug
          title
          summary {
            summary
          }
          featuredImage {
            gatsbyImageData
          }
          createdAt(formatString: "DD MMMM YYYY")
        }
      }
    }
  `);

  const blogs = data?.blogs?.nodes;
  const [searchTerm, setSearchTerm] = useState("");

  function getSearchedBlogs(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    setSearchTerm(e.target.search.value.toLowerCase());
  }

  return (
    <Layout>
      <Seo title="News" />
      <section className="mx-auto max-w-5xl py-5 px-10">
        <div className="flex items-center justify-end">
          <form onSubmit={getSearchedBlogs}>
            <input
              type="text"
              name="search"
              className="outline-none border-b border-secondary"
              placeholder="Search..."
            />
            <button type="submit">
              <BsSearch className="mr-2" />
            </button>
          </form>
        </div>

        {blogs
          .filter((val) => val.title.toLowerCase().includes(searchTerm))
          .map((blog) => {
            return (
              <div
                key={blog?.id}
                className="flex flex-col lg:flex-row my-10 border rounded overflow-hidden"
              >
                <div className="lg:w-1/2 ">
                  <Link to={blog?.slug}>
                    <GatsbyImage
                      className="w-full h-full object-cover"
                      image={blog?.featuredImage?.gatsbyImageData}
                      alt={blog?.title}
                    />
                  </Link>
                </div>
                <div className="lg:w-1/2 p-7">
                  <div className="mb-3 text-neutral-700 text-sm">
                    <p className="flex items-center">
                      <FaUserCircle className="mr-1" />
                      {blog?.authorName}
                    </p>
                    <p className="flex items-center">
                      <FaClock className="mr-1" /> {blog?.createdAt}
                    </p>
                  </div>

                  <Link to={`/news/${blog.slug}`}>
                    <h4 className="text-3xl my-3 font-medium leading-snug text-neutral-700 hover:text-secondary transition-colors">
                      {blog?.title.length > 45
                        ? blog?.title.substring(0, 40) + `...`
                        : blog?.title}
                    </h4>
                  </Link>

                  <p className="text-neutral-600 leading-normal">
                    {blog.summary?.summary > 130
                      ? blog.summary?.summary.substr(0, 130) + "..."
                      : blog.summary?.summary}
                  </p>

                  <hr className="h-2 mt-10 mb-3" />
                  <div className="flex text-xs justify-between items-center">
                    <div className="flex text-xs justify-between items-center text-neutral-600">
                      <div className="flex items-center">
                        <p className="mr-5 flex items-center">
                          <FaEye className="mr-1 text-[15px]" />
                          17
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="mr-5 flex items-center">
                          <FaRegEnvelope className="mr-1 text-[15px]" />
                          22
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <p>18</p>
                      <button>
                        <FaHeart className="ml-1.5" />
                      </button>
                    </div>
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
