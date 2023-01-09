import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";
import { NormalButton } from "./Button";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/slider.css";

const Testimonial = ({ showModal, setShowModal, refresh }) => {
  const [testimonials, setTestimonials] = useState([]);
  const contentful = require("contentful-management");

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY,
  });

  useEffect(() => {
    client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then((space) => space.getEnvironment("master"))
      .then((environment) =>
        environment.getPublishedEntries({ content_type: "testimonial" })
      ) // you can add more queries as 'key': 'value'
      .then((response) => {
        // console.log(response.items);
        setTestimonials(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="w-full bg-neutral-100 py-20">
      <div className="max-w-5xl mx-auto px-10">
        <SectionTitle className="text-neutral-700 text-3xl font-semibold text-center">
          Testimonials
        </SectionTitle>
        <SectionText className="text-secondary max-w-3xl mx-auto mt-5  leading-normal text-center">
          Here is what our clients say about us.
        </SectionText>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
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
          {testimonials.map((item, index) => (
            <SwiperSlide className="py-10" key={index}>
              <TestimonialCard
                name={item.fields.name["en-US"]}
                text={item.fields.text["en-US"]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center items-center">
        <NormalButton
          onClick={() => setShowModal(!showModal)}
          className="px-6 py-2 text-white"
        >
          Leave a Testimonial
        </NormalButton>
      </div>
    </section>
  );
};

export default Testimonial;
