import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Companies = () => {
  const data = useStaticQuery(graphql`
    query CompanyQuery {
      strapiPage(title: { eq: "Home" }) {
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_COMPANIES {
            id
            company {
              companyURL
              strapi_id
              companyImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                  publicURL
                  url
                }
                ext
                alternativeText
              }
            }
          }
        }
      }
    }
  `);

  const companies = data?.strapiPage?.blocks[3]?.company;

  return (
    <section className="w-full bg-white">
      <div className="py-5 max-w-xl mx-auto grid grid-cols-2 md:grid-cols-4 ">
        {companies?.map((company) => {
          const image = getImage(company?.companyImage?.localFile);

          return (
            <a
              key={company?.strapi_id}
              href={company?.companyURL}
              target="_blank"
              className="max-w-[100px] mx-auto md:mx-5 flex items-center"
            >
              {company?.companyImage?.ext === ".svg" ? (
                <img src={company?.companyImage?.localFile?.publicURL} alt="" />
              ) : (
                <GatsbyImage
                  image={image}
                  alt={company?.companyImage?.alternativeText}
                />
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
