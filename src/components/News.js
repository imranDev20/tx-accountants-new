import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsCard from "./NewsCard";

const News = () => {
  const { allStrapiBlog } = useStaticQuery(
    graphql`
      query MyQuery {
        allStrapiBlog {
          nodes {
            strapi_id
            title
            content {
              data {
                content
              }
            }
            publish_at
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
    `
  );

  console.log(allStrapiBlog.nodes);

  const blogs = allStrapiBlog.nodes;

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-20 ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {blogs.map((blog) => {
            console.log(blog);
            return (
              <SwiperSlide key={blog.strapi_id}>
                <NewsCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
