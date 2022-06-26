import React from "react";
import { BsTelephone, BsEnvelopeOpen } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const InfoStrip = () => {
  return (
    <section className="w-full bg-secondary py-7 text-white">
      <div className="max-w-5xl mx-auto   grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-start  justify-center mb-5">
          <div className="flex items-center text-lg">
            <BsTelephone className="mr-2 " />
            <a href="tel:020 3488 3312">020 3488 3312</a>
          </div>
        </div>
        <div className="flex items-start  justify-center border-l border-neutral-100/20">
          <div className="flex items-center text-lg">
            <BsEnvelopeOpen className="mr-2 " />
            <a href="mailto:info@txaccountants.co.uk">
              info@txaccountants.co.uk
            </a>
          </div>
        </div>

        <div className="flex border-l border-neutral-100/20 pl-5">
          <FiMapPin className="mr-4 mt-2 text-xl" />
          <div>
            <div className="mb-3">
              <p>Newcastle Office</p>
              <p className="text-sm">
                2A Beaconsfield Street, Newcastle, NE4 5JN
              </p>
            </div>
            <div className="my-3">
              <p>London Office</p>
              <p className="text-sm">
                20-22 Wenlock Road, London, England, N1 7GU
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoStrip;
