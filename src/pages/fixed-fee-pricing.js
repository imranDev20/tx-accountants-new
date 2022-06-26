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
      <section>
        <h1>Affordable Price</h1>
        <div>
          <div className="flex justify-center items-start">
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
