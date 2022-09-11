import React from "react";

import { FaTimes } from "react-icons/fa";
import Form from "./Form";

const AppointmentModal = ({ showModal, setShowModal }) => {
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
          Request an appointment!
        </h2>
        <Form isModal />
        <div
          className="absolute top-5 right-5 text-2xl font-medium cursor-pointer"
          onClick={() => setShowModal(!showModal)}
        >
          <FaTimes className="hover:text-secondary transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
