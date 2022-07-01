import React, { useState } from "react";
import Layout from "../components/Layout";
import PriceCard from "../components/PriceCard";
import PricingModal from "../components/PricingModal";
import Seo from "../components/Seo";

const FixedFeePricingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [priceId, setPriceId] = useState([]);
  const [title, setTitle] = useState(null);
  const [priceFixed, setPriceFixed] = useState(null);
  const [pricePM, setPricePM] = useState(null);

  return (
    <Layout>
      <Seo title="Fixed Fee Pricing" />
      <section className="relative bg-[url('https://images.unsplash.com/photo-1568658176307-bfbd2873abda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-center before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:w-full before:h-full before:bg-primary/80 before:z-0 pb-20">
        <h1 className="bg-secondary text-center text-white py-5 text-3xl font-medium mb-10 relative z-10">
          Affordable Price
        </h1>
        <div className="max-w-5xl mx-auto relative z-30">
          <div className="flex flex-row justify-center items-start xl:flex-nowrap flex-wrap">
            <PriceCard
              showModal={showModal}
              setShowModal={setShowModal}
              priceId={[
                "price_1Kl6NSHp3REjJwfqwEX8ys9k", //Fixed
                "price_1Kl6NRHp3REjJwfqsRRG3ItS", //Per Month
              ]}
              setPriceId={setPriceId}
              title="Individual"
              setTitle={setTitle}
              priceFixed="100"
              setPriceFixed={setPriceFixed}
              pricePM="10"
              setPricePM={setPricePM}
              points={[
                "Discuss your circumstances",
                "HMRC registrations",
                "Prepare tax return for you approval",
                "Tax liability computation",
                "Submit the return online with HMRC",
                "Free meetings, calls and emails Ongoing tax advice and guidance",
              ]}
              ideals={[
                "Individuals",
                "partners",
                "directors",
                "Mini Cab and Uber drivers",
                "sub-contractors",
                "freelancers",
                "self-employed",
                "landlords",
                "sole trader",
              ]}
            ></PriceCard>
            <PriceCard
              showModal={showModal}
              setShowModal={setShowModal}
              priceId={[
                "price_1Kl6OrHp3REjJwfqLVoPVfXo", //Fixed
                "price_1Kl6OrHp3REjJwfqwndcpmis", //Per Month
              ]}
              setPriceId={setPriceId}
              title="Sole Trader"
              setTitle={setTitle}
              priceFixed="300"
              setPriceFixed={setPriceFixed}
              pricePM="25"
              setPricePM={setPricePM}
              points={[
                "Discuss your circumstances",
                "HMRC registrations",
                "Liaise with third parties to gather relevant data (if required",
                "Prepare tax return for your approval",
                "Tax liability computation",
                "Submit the return online with HMRC",
                "Free meetings, calls and emails Ongoing tax advice and guidance",
              ]}
              ideals={[
                "Consultants",
                "designers",
                "engineers",
                "entrepreneur",
                "musicians",
                "project managers",
                "software developers",
                "solicitors",
              ]}
            ></PriceCard>
            <PriceCard
              showModal={showModal}
              setShowModal={setShowModal}
              priceId={[
                "price_1Kl6QpHp3REjJwfqAxX0cefQ", //Fixed
                "price_1Kl6QpHp3REjJwfq4lddaCMo", //Per Month
              ]}
              setPriceId={setPriceId}
              title="Limited Company"
              setTitle={setTitle}
              priceFixed="600"
              setPriceFixed={setPriceFixed}
              pricePM="60"
              setPricePM={setPricePM}
              points={[
                "Detailed consultation around your circumstances",
                "Company Formation",
                "Accounting and bookkeeping setup support",
                "HMRC registration",
                "Confirmation statement",
                "Annual/statutory/year-end accounts",
                "Corporation tax return (CT600)",
                "Payroll Services",
                "VAT returns completed and submitted",
                "Self-assessment tax return",
                "Free meetings, calls and emails Ongoing tax advice and guidance",
              ]}
              ideals={["Small and Medium Size companies"]}
            ></PriceCard>
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
      </section>
    </Layout>
  );
};

export default FixedFeePricingPage;
