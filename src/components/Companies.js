import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Companies = () => {
  const data = useStaticQuery(graphql`
    query CompanyQuery {
      allContentfulPartnerCompanies(sort: { fields: companyId, order: ASC }) {
        nodes {
          name
          companyId
          url
          id
          image {
            publicUrl
            filename
            url
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  `);

  const companies = data?.allContentfulPartnerCompanies?.nodes;

  return (
    <section className="w-full bg-white">
      <div className="py-5 max-w-xl mx-auto grid grid-cols-2 md:grid-cols-4 ">
        {companies?.map((company) => {
          const ext = company.image.filename.split(".")[1];

          return (
            <a
              key={company?.companyId}
              href={company?.url}
              target="_blank"
              className={`${
                company.companyId === 1 ? " max-w-[70px]" : "max-w-[170px]"
              } mx-auto md:mx-5 flex items-center`}
            >
              {ext === "svg" ? (
                <img src={company.image.url} alt="" className="w-72" />
              ) : (
                <GatsbyImage image={company.image.gatsbyImageData} alt="" />
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
