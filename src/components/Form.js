import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FiSend } from "react-icons/fi";
import { NormalButton } from "./Button";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

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
          Submit
          {state.submitting ? (
            <LoadingSpinner
              className={`w-5 h-5 ml-2 text-gray-200/50 animate-spin fill-white `}
            />
          ) : (
            <FiSend className={`ml-2 text-sm `} />
          )}
        </NormalButton>
      </form>
      {state.succeeded &&
        toast.success("Request received successfully!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "success1",
        })}
    </div>
  );
};

export default Form;
