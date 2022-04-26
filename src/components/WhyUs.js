import React from "react";
import { BsEyeSlash, BsHourglassSplit, BsCloudArrowDown } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillAccountBook } from "react-icons/ai";

const WhyUs = () => {
  const points = [
    {
      id: 1,
      name: "Fixed Fee- No Hidden Cost",
      icon: <BsEyeSlash />,
    },
    {
      id: 2,
      name: "Never Miss a deadline",
      icon: <BsEyeSlash />,
    },
    {
      id: 3,
      name: "HMRC Authorized Agent",
      icon: <BsEyeSlash />,
    },
    {
      id: 4,
      name: "Chartered Certified Accountants",
      icon: <BsEyeSlash />,
    },
    {
      id: 5,
      name: "Guaranteed response within 24 hours",
      icon: <BsEyeSlash />,
    },
    {
      id: 6,
      name: "Fully Cloud Based service available so, you never have to schedule an appointment, leave your office, or wait in long queues to get your business tax and accounting done right.",
      icon: <BsEyeSlash />,
    },
  ];

  return (
    <section className="bg-primary">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row  text-white">
        <div className="w-full min-h-[calc(100vh-100px)] relative bg-cover bg-no-repeat lg:w-1/2 bg-fixed bg-[top_right] bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')] before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-primary/60"></div>

        <div className="w-full pl-10 pr-10 lg:w-1/2 lg:max-w-xl py-20">
          <h2 className="text-3xl font-semibold text-center lg:text-left">
            Why Us
          </h2>
          <div className="mt-10">
            {points.map((point) => {
              return (
                <div
                  key={point.id}
                  className="flex items-center my-7 font-light"
                >
                  <span className="mr-3 text-2xl">{point.icon}</span>
                  <span className="text-xl">{point.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
