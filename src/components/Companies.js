import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Companies = () => {
  const data = useStaticQuery(graphql`
    query CompanyQuery {
      strapiPage {
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_COMPANIES {
            company {
              companyURL
              tallLength
              strapi_id
              companyImage {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: TRACED_SVG, width: 480)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const companies = data.strapiPage.blocks[4].company;

  return (
    <section className="w-full bg-white">
      <div className="py-20 max-w-4xl mx-auto px-20 grid grid-cols-4 gap-10">
        {companies.map((company) => {
          const image = getImage(company.companyImage.localFile);

          return (
            <div
              className={`flex items-center justify-center`}
              key={company.strapi_id}
            >
              <a rel="noreferrer" target="_blank" href={company.companyURL}>
                <GatsbyImage
                  imgClassName={`w-full !object-contain cursor-pointer p-5 ${
                    company.tallLength ? `!h-[65%] !mt-7` : `h-full`
                  }`}
                  image={image}
                  alt={company.companyImage.alternativeText}
                />
              </a>

              {/* <img
                className={`w-full h-full object-contain cursor-pointer p-5 ${
                  company.tallLength ? `h-[75%]` : `h-full`
                }`}
                src={company.logo}
                alt=""
              /> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
