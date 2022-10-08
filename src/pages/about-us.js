import React from "react";
import loadable from "@loadable/component";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { LinkButton } from "../components/Button";
import HandGear from "../images/icons/hand-gear.svg";
import LaptopGear from "../images/icons/laptop-gear.svg";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import sanitizeHtml from "sanitize-html";
const Faq = loadable(() => import("../components/Faq"));

const AboutPage = () => {
  const { strapiPage } = useStaticQuery(graphql`
    query AboutPageQuery {
      strapiPage(title: { eq: "About" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_WHO_WE_ARE {
            id
            whoWeAreBg {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
            }
            whoWeAreContent {
              strapi_id
              title
              content {
                data {
                  content
                }
              }
            }
          }
          ... on STRAPI__COMPONENT_BLOCKS_VISION_TECH {
            id
            visionTechContent {
              title
              content {
                data {
                  content
                }
              }
            }
          }
        }
      }
    }
  `);

  const whoWeAre = strapiPage.blocks[0];

  const visionTech = strapiPage.blocks[1].visionTechContent;

  console.log(visionTech);

  const image = getImage(whoWeAre.whoWeAreBg.localFile);
  const bgImage = convertToBgImage(image);

  return (
    <Layout>
      <Seo title="About" />

      <BackgroundImage
        {...bgImage}
        loading="lazy"
        className="about-us-bg"
        Tag="section"
      >
        <div className="relative before:content-[''] before:absolute before:bg-primary/60 before:h-full before:w-full before:top-0 before:left-0 py-5">
          <div className="max-w-5xl mx-auto z-20 relative">
            {whoWeAre.whoWeAreContent.map((w) => (
              <div key={w.strapi_id} className="mb-5 text-white">
                <h2 className="text-2xl mb-4 font-semibold ">{w.title}</h2>
                <div
                  className="my-2  leading-normal text-justify"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(w.content?.data?.content),
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundImage>

      <section className="px-10">
        <div className="max-w-4xl mx-auto mt-16">
          {visionTech.map((v, i) => (
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
          ))}
        </div>
      </section>
      <Faq />
    </Layout>
  );
};

export default AboutPage;
