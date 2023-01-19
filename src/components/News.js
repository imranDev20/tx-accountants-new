import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import NewsCard from "./NewsCard";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const News = () => {
  const data = useStaticQuery(graphql`
    query HomeNewQuery {
      blogs: allContentfulBlogs(sort: { fields: createdAt, order: DESC }) {
        nodes {
          id
          slug
          title
          featuredImage {
            gatsbyImageData(placeholder: BLURRED, width: 320)
          }
        }
      }
    }
  `);
  const blogs = data?.blogs?.nodes;

  return (
    <section className="w-full bg-white py-20 px-10">
      <div className="max-w-5xl mx-auto   ">
        <h2 className="text-neutral-700 text-3xl font-semibold text-center">
          Important News
        </h2>
        <div className="flex justify-center items-center my-10">
          {
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              autoplay
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                1280: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogs.map((blog) => {
                const blogImage = blog?.featuredImage?.gatsbyImageData;
                return (
                  <SwiperSlide key={blog?.id}>
                    <NewsCard
                      slug={blog?.slug}
                      title={blog?.title}
                      image={blogImage}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          }
        </div>
      </div>
    </section>
  );
};

export default News;
