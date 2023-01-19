import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import WorkCard from "./WorkCard";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const data = useStaticQuery(graphql`
    query ServicesCardsQuery {
      allContentfulServices(sort: { order: ASC, fields: serviceId }) {
        nodes {
          id
          name
          serviceId
          icon {
            publicUrl
            url
          }
        }
      }
    }
  `);
  const services = data.allContentfulServices.nodes;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 my-10">
      {services.map((service, index) => (
        <WorkCard
          key={service.serviceId}
          index={index}
          inView={inView}
          name={service.name}
          icon={service.icon.url}
        />
      ))}
    </div>
  );
};

export default Services;
