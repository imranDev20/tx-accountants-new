import React from "react";
import { BsTelephone, BsEnvelopeOpen } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const InfoStrip = () => {
  return (
    <section className="w-full bg-secondary py-7 text-white">
      <div className="max-w-xs xl:max-w-5xl mx-auto grid xl:grid-cols-3">
        <div className="flex items-start  justify-start xl:justify-center mb-10">
          <div className="flex items-center text-lg">
            <BsTelephone className="mr-2 " />
            <a href="tel:020 3488 3312">020 3488 3312</a>
          </div>
        </div>
        <div className="flex items-start justify-start xl:justify-center border-l border-neutral-100/20 mb-10">
          <div className="flex items-center text-lg">
            <BsEnvelopeOpen className="mr-2 " />
            <a href="mailto:info@txaccountants.co.uk">
              info@txaccountants.co.uk
            </a>
          </div>
        </div>

        <div className="flex justify-start xl:justify-center xl:border-l border-neutral-100/20 xl:pl-5">
          <FiMapPin className="mr-2 mt-2 text-xl" />

          <div className="mb-3">
            <p>London Office</p>
            <p className="text-sm">
              20-22 Wenlock Road, London, England, N1 7GU
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoStrip;
