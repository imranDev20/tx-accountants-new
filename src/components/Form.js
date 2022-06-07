import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { NormalButton } from "./Button";

const Form = ({ isModal }) => {
  const [state, handleSubmit] = useForm("xoqrwnop");

  return (
    <div className="relative">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <input
            id="name"
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="w-[49%] mb-5 h-10 px-5 shadow rounded-sm outline-none focus:ring ring-secondary"
          />
          <ValidationError prefix="Name" field="Name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="w-[49%] mb-5 h-10 px-5 shadow rounded-sm outline-none focus:ring ring-secondary"
          />
          <ValidationError prefix="Email" field="Email" errors={state.errors} />
        </div>
        <textarea
          id="message"
          name="Message"
          className="h-36 px-5 shadow py-5 mb-5 rounded-sm outline-none focus:ring ring-secondary"
          placeholder="Type your message here"
        />
        <ValidationError
          prefix="Message"
          field="Message"
          errors={state.errors}
        />
        <NormalButton
          className={`text-white py-2 w-1/2 mx-auto flex items-center justify-center`}
          type="submit"
          disabled={state.submitting}
        >
          Submit <FiSend className="ml-2 text-sm" />
        </NormalButton>
      </form>
      {state.succeeded && (
        <p>
          <FaCheckCircle /> Email sent successfully
        </p>
      )}
    </div>
  );
};

export default Form;
