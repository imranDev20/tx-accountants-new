import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { LinkButton } from "../components/Button";
import HandGear from "../images/icons/hand-gear.svg";
import LaptopGear from "../images/icons/laptop-gear.svg";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section className="pt-16 pb-10 text-white bg-[url('https://images.unsplash.com/photo-1568658176307-bfbd2873abda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-center bg-fixed bg-no-repeat bg-cover relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-full before:h-full before:bg-primary/80">
        <div className="container mx-auto px-20 z-20 relative">
          <div className="mb-10">
            <h2 className="text-2xl mb-4 font-semibold ">Who We Are</h2>
            <p className="my-2 leading-loose text-justify">
              We are Chartered Certified Accountants based in London. Our team
              consists of highly qualified accountants with several years of
              experience serving various industries. The company was founded by
              a master accountant who holds an MSc in professional accountancy
              from the University of London and is a fully qualified chartered
              accountant certified by the Association of Chartered Certified
              Accountant (ACCA) and the Institute of Financial Accountants
              (IFA).
            </p>
            <p className="my-2 leading-loose text-justify">
              As a licensed, charter-certified accounting practice, we offer a
              range of services designed to assist every type of business. Our
              services are affordably priced and with no hidden costs, making
              them accessible to even the smallest sole proprietorships; they
              are flexible and cloud-based, meaning everything can be handled
              remotely and without time-consuming in-person meetings.
            </p>
          </div>

          <div className="">
            <h2 className="text-2xl mb-4 font-semibold">What We Do</h2>
            <p className="my-2 leading-loose text-justify">
              We are working together with entrepreneurs and private individuals
              achieve their goal through our personalized services and
              cutting-edge accounting software which automates the major
              accounting process. We have built a significant expertise to
              identify and implementing cost cutting exercise and increase your
              revenue instead just providing the contemporary year-end
              accounting services. Our dedicated accountant will be in touch
              with you time to time to support your business and update you with
              regulatory changes. We are open 7 days a week. We offer fixed fee
              pricing in all aspect of our bookkeeping and accounting services,
              so you will never have to be surprised with unexpected bill.
            </p>

            <LinkButton className="" to="/contact-us">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-20 mt-16">
          <div className="flex">
            <div className="w-1/3">
              <img
                className="w-full h-full max-w-[145px]"
                src={HandGear}
                alt=""
              />
            </div>
            <div className="w-2/3">
              <h3 className="text-3xl text-secondary mb-2 font-semibold">
                Our Vision
              </h3>
              <p className="text-neutral-600 leading-loose text-justify">
                As long-time accounting professionals, we came together to
                create a new kind of accounting firm designed to help growing
                businesses by providing seamless, efficient and affordable
                accounting services designed to help busy executives and owners
                handle all their accounting without ever having to leave the
                office.
              </p>
            </div>
          </div>

          <div className="my-8 flex items-center">
            <div className="w-1/3">
              <img
                className="w-full h-full max-w-[145px]"
                src={LaptopGear}
                alt=""
              />
            </div>
            <div className="w-2/3">
              <h3 className="text-3xl text-secondary mb-2 font-semibold">
                Technology
              </h3>
              <p className="text-neutral-600 leading-loose text-justify">
                Our unique small business accounting service is powered by
                cutting edge technology that makes accounting, fast, easy and
                effortless for busy business owners. TX Accountants Ltd's
                services integrate remotely into your daily business operations
                through our user-friendly, web-based accounting software backed
                by a dedicated team of accountants ready to guide you every step
                of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
