import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const WhyUs = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      strapiPage(title: { eq: "Home" }) {
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_WHY_US {
            whyUsIconStack {
              stackText
              stackIcon {
                localFile {
                  url
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `);

  const whyUsPoints = data?.strapiPage?.blocks[4]?.whyUsIconStack;

  return (
    <section className="bg-primary">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row  text-white">
        <div className="w-full min-h-[calc(100vh-100px)] relative bg-cover bg-no-repeat lg:w-1/2 bg-fixed bg-[top_right] bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')] before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:bg-primary/60"></div>

        <div className="w-full pl-10 pr-10 lg:w-1/2 lg:max-w-xl py-20">
          <h2 className="text-3xl font-semibold text-center lg:text-left">
            Why Us
          </h2>
          <div className="mt-10">
            {whyUsPoints.map((point, index) => {
              return (
                <div key={index} className="flex items-center my-5 ">
                  <img
                    className="w-6 mr-3"
                    src={point?.stackIcon?.localFile?.publicURL}
                    alt=""
                  />

                  <span className="text-lg">{point?.stackText}</span>
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
