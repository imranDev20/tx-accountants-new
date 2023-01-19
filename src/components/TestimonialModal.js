import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NormalButton } from "./Button";
import { FiSend } from "react-icons/fi";
import LoadingSpinner from "./LoadingSpinner";

const TestimonialModal = ({
  showModal,
  setShowModal,
  refresh,
  setRefresh,
  testimonials,
  setTestimonials,
  setSlideTo,
}) => {
  const [loading, setLoading] = useState(false);

  const contentful = require("contentful-management");

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY,
  });

  const handleSubmit = (e) => {
    setLoading(false);
    e.preventDefault();
    client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then((space) => {
        setLoading(true);
        return space.getEnvironment("master");
      })
      .then((environment) =>
        environment.createEntry("testimonial", {
          fields: {
            name: {
              "en-US": e.target.name.value,
            },
            email: {
              "en-US": e.target.email.value,
            },
            text: {
              "en-US": e.target.text.value,
            },
          },
        })
      )
      .then((entry) => {
        entry.publish();
        e.target.reset();
      })
      .then(() => {
        client
          .getSpace(process.env.CONTENTFUL_SPACE_ID)
          .then((space) => space.getEnvironment("master"))
          .then((environment) =>
            environment.getPublishedEntries({ content_type: "testimonial" })
          ) // you can add more queries as 'key': 'value'
          .then((response) => {
            setLoading(false);
            setTestimonials(response.items);
            setShowModal(false);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  return (
    <div
      className={`h-0 ${
        showModal &&
        `w-full h-full bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 bottom-0 right-0 px-5`
      } ${showModal ? "opacity-100" : "opacity-0"} ${
        showModal ? "scale-100" : "scale-0"
      } ${showModal ? "z-20" : "z-[-100]"}`}
    >
      <div
        className={`bg-gray-100 relative top-1/2 -translate-y-1/2  p-5 max-w-xl w-full mx-auto  transition-all rounded shadow-lg ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-semibold text-2xl my-5 text-secondary-dark text-center uppercase">
          Leave a Testimonial
        </h2>

        <form action="" onSubmit={handleSubmit}>
          <input
            placeholder="Your Name"
            type="text"
            required
            name="name"
            className="w-full mb-5 h-10 px-5 shadow rounded-sm outline-none focus:ring ring-secondary"
          />
          <input
            placeholder="Your Email Address"
            type="email"
            name="email"
            required
            className="w-full mb-5 h-10 px-5 shadow rounded-sm outline-none focus:ring ring-secondary"
          />
          <textarea
            className="w-full h-36 px-5 shadow py-5 mb-5 rounded-sm outline-none focus:ring ring-secondary"
            name="text"
            id=""
            placeholder="Your Testimonial.."
            cols="30"
            rows="10"
          ></textarea>
          <NormalButton
            type="submit"
            className={`text-white py-2 w-1/2 mx-auto flex items-center justify-center bg-secondary`}
          >
            Submit
            {loading ? (
              <LoadingSpinner
                className={`w-5 h-5 ml-2 text-gray-200/50 animate-spin fill-white `}
              />
            ) : (
              <FiSend className={`ml-2 text-sm `} />
            )}
          </NormalButton>
          <div
            className="absolute top-5 right-5 text-2xl font-medium cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            <FaTimes className="hover:text-secondary transition-colors" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialModal;
