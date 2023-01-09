import React from "react";

const Targets = () => {
  return (
    <section className="px-10">
      <div className="max-w-4xl mx-auto mt-16">
        {/* {visionTech.map((v, i) => (
    <div className="flex xl:flex-row flex-col mb-10">
      <div className="xl:w-1/3 w-full mb-5">
        <img
          className="w-full h-full max-w-[145px]"
          src={i == 0 ? HandGear : LaptopGear}
          alt=""
        />
      </div>
      <div className="xl:w-2/3 w-full">
        <h3 className="text-3xl text-secondary-dark mb-2 font-medium">
          {v.title}
        </h3>
        <div
          className="text-neutral-600  leading-normal text-justify"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(v.content.data.content),
          }}
        ></div>
      </div>
    </div>
  ))} */}
      </div>
    </section>
  );
};

export default Targets;
