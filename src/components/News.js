import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import NewsCard from "./NewsCard";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { getImage } from "gatsby-plugin-image";
import { useNewsQuery } from "../hooks/useNewsQuery";

const News = () => {
  // Can be a string as well. Need to ensure each key-value pair ends with ;
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const { allStrapiBlog } = useNewsQuery();
  const blogs = allStrapiBlog.nodes;

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-20 ">
        <h2 className="text-neutral-700 text-3xl font-semibold text-center">
          Important News
        </h2>
        <div className="flex justify-center items-center my-10">
          {blogs ? (
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
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
                const blogImage = getImage(blog?.image[0]?.localFile);
                return (
                  <SwiperSlide key={blog.strapi_id}>
                    <NewsCard
                      slug={blog?.slug}
                      title={blog?.title}
                      image={blogImage}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <ScaleLoader
              color={`#525252`}
              loading={!blogs}
              css={override}
              size={150}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
