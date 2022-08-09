import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Donald Simpson",
      text: "Consulting theme is an invaluable partner. Our teams have collaborated to support the growing field of practitioners using collective impact.",
      position: "Chairman, Harmony Corporation",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
    {
      id: 2,
      name: "Donald Simpson",
      text: "Consulting theme is an invaluable partner. Our teams have collaborated to support the growing field of practitioners using collective impact.",
      position: "Chairman, Harmony Corporation",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
    {
      id: 3,
      name: "Donald Simpson",
      text: "Consulting theme is an invaluable partner. Our teams have collaborated to support the growing field of practitioners using collective impact.",
      position: "Chairman, Harmony Corporation",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
    {
      id: 4,
      name: "Donald Simpson",
      text: "Consulting theme is an invaluable partner. Our teams have collaborated to support the growing field of practitioners using collective impact.",
      position: "Chairman, Harmony Corporation",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
  ];

  return (
    <section className="w-full bg-neutral-100 py-20">
      <div className="max-w-5xl mx-auto px-10">
        <SectionTitle className="text-neutral-700 text-3xl font-semibold text-center">
          Testimonials
        </SectionTitle>
        <SectionText className="text-neutral-600 max-w-3xl mx-auto mt-5  leading-normal text-center">
          Cray woke kitsch, hammock vaporware 8-bit prism craft beer health goth
          four dollar toast. Lyft before they sold out pin gluten-free edison
          bulb squid tbh vinegar actually readymade.
        </SectionText>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
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
          className=""
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide className="py-10" key={review.id}>
                <TestimonialCard
                  name={review.name}
                  text={review.text}
                  position={review.position}
                  image={review.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
