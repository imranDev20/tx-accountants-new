import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Companies = () => {
  const data = useStaticQuery(graphql`
    query CompanyQuery {
      strapiPage(title: { eq: "Home" }) {
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
                    gatsbyImageData(
                      placeholder: TRACED_SVG
                      width: 320
                      quality: 70
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const companies = data?.strapiPage?.blocks[4]?.company;

  return (
    <section className="w-full bg-white">
      <div className="py-5 max-w-4xl mx-auto px-20 grid grid-cols-4 gap-10">
        {companies?.map((company) => {
          const image = getImage(company?.companyImage?.localFile);

          return (
            <div
              className={`flex w-28 items-center justify-center`}
              key={company.strapi_id}
            >
              <a rel="noreferrer" target="_blank" href={company.companyURL}>
                <GatsbyImage
                  className="grayscale hover:filter-none transition-all"
                  imgClassName={`w-full !object-contain cursor-pointer  ${
                    company.tallLength ? `!h-[60%] !mt-8` : `h-full`
                  }`}
                  image={image}
                  alt={company?.companyImage?.alternativeText}
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
