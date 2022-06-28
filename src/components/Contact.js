import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-fixed bg-cover bg-[center_center] relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:w-full before:h-full before:bg-primary/60">
      <div className="max-w-2xl mx-auto z-20 relative py-20 px-10">
        <h2 className=" text-center text-3xl font-semibold mb-5 text-white">
          Request a Callback
        </h2>
        <p className="text-white text-lg text-center max-w-3xl mx-auto my-5  leading-normal">
          To schedule a free appointment with one of our Accountants, please
          fill in your contact details.
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
