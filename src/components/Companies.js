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
      <div className="py-5 max-w-xl mx-auto flex items-center justify-center">
        {companies?.map((company) => {
          const image = getImage(company?.companyImage?.localFile);
          console.log(company.tallLength);

          return (
            <a
              key={company?.strapi_id}
              href={company?.companyURL}
              className="max-w-[100px] mx-5"
            >
              <GatsbyImage
                image={image}
                className={company?.tallLength && "h-[10px]"}
                imgClassName={`w-full  ${company?.tallLength}`}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
