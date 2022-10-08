import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import React, { useState } from "react";
import Layout from "../components/Layout";
import PriceCard from "../components/PriceCard";
import PricingModal from "../components/PricingModal";
import Seo from "../components/Seo";

const FixedFeePricingPage = () => {
  const { strapiPage } = useStaticQuery(graphql`
    query FixedFeeQuery {
      strapiPage(title: { eq: "Fixed Fee" }) {
        id
        slug
        blocks {
          ... on STRAPI__COMPONENT_BLOCKS_FIXED_FEES {
            id
            benefits {
              benefit
              strapi_id
            }
            feesMonthly
            feesAnnually
            customerType
            strapi_id
            idealFor {
              iealForTypes
              strapi_id
            }
          }
          ... on STRAPI__COMPONENT_BLOCKS_FIXED_FEE_HEADER {
            id
            title
            backgroundImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `);

 
  const [showModal, setShowModal] = useState(false);
  const [priceId, setPriceId] = useState([]);
  const [title, setTitle] = useState(null);
  const [priceFixed, setPriceFixed] = useState(null);
  const [pricePM, setPricePM] = useState(null);

  console.log(strapiPage.blocks);
  const image = getImage(strapiPage.blocks[3].backgroundImage.localFile)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <Seo title="Fixed Fee Pricing" />
      <BackgroundImage
      {...bgImage}
      loading="lazy"
      className="contact-bg"
      Tag="section"
    >
      <div className="relative before:content-[''] before:absolute before:bg-primary/80 before:h-full before:w-full before:top-0 before:left-0">
        <h1 className="bg-secondary text-center text-white py-5 text-3xl font-medium mb-10 relative z-10">
          {strapiPage.blocks[3].title}
        </h1>
        <div className="max-w-5xl mx-auto relative z-30">
          <div className="flex flex-row justify-center items-start xl:flex-nowrap flex-wrap">
            {strapiPage.blocks.slice(0, 3).map((b) => (
              <PriceCard
                key={b.strapi_id}
                showModal={showModal}
                setShowModal={setShowModal}
                priceId={[
                  "price_1Kl6NSHp3REjJwfqwEX8ys9k", //Fixed
                  "price_1Kl6NRHp3REjJwfqsRRG3ItS", //Per Month
                ]}
                setPriceId={setPriceId}
                title={b.customerType}
                setTitle={setTitle}
                priceFixed={b.feesAnnually}
                setPriceFixed={setPriceFixed}
                pricePM={b.feesMonthly}
                setPricePM={setPricePM}
                points={b.benefits}
                ideals={b.idealFor}
              />
            ))}
          </div>

          <PricingModal
            title={title}
            priceId={priceId}
            priceFixed={priceFixed}
            pricePM={pricePM}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </BackgroundImage>
      {/* <section className="relative bg-[url('https://images.unsplash.com/photo-1568658176307-bfbd2873abda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-center before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-primary/80 before:z-0 pb-20">
        
      </section> */}
    </Layout>
  );
};

export default FixedFeePricingPage;

// priceId={[
//   "price_1Kl6OrHp3REjJwfqLVoPVfXo", //Fixed
//   "price_1Kl6OrHp3REjJwfqwndcpmis", //Per Month
// ]}

// priceId={[
//   "price_1Kl6QpHp3REjJwfqAxX0cefQ", //Fixed
//   "price_1Kl6QpHp3REjJwfq4lddaCMo", //Per Month
// ]}