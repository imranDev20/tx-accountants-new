import React from "react";
import WorkCard from "./WorkCard";
import { LinkButton } from "./Button";

import BookKeepingIcon from "../images/icons/bookkeeping.svg";
import ManagementAccountsIcon from "../images/icons/management-accounts.svg";
import CorporateTaxReturnIcon from "../images/icons/corporate-tax-return.svg";
import PayrollProcessingIcon from "../images/icons/payroll-processing.svg";
import CompanySecretarialIcon from "../images/icons/company-secretarial.svg";
import AccountsPreparationIcon from "../images/icons/accounts-preparation.svg";
import VatReturn from "../images/icons/vat-return.svg";
import PersonalTaxReturnIcon from "../images/icons/personal-tax-return.svg";
import CompanyFormationIcon from "../images/icons/company-formation.svg";

const WhatWeDo = () => {
  const works = [
    { id: 1, name: "Personal Tax Returns", icon: PersonalTaxReturnIcon },
    { id: 2, name: "Accounts Preparation", icon: AccountsPreparationIcon },
    { id: 3, name: "Company Secretarial", icon: CompanySecretarialIcon },
    { id: 4, name: "Payroll Processing", icon: PayrollProcessingIcon },
    { id: 5, name: "Corporation Tax Returns", icon: CorporateTaxReturnIcon },
    { id: 6, name: "Management Accounts", icon: ManagementAccountsIcon },
  ];
  return (
    <section className="bg-neutral-100 w-full py-14">
      <div className="container mx-auto px-20">
        <h2 className={`text-center capitalize text-secondary`}>What we do</h2>
        <p className="text-neutral-600 mt-5 mx-auto text-center">
          We are working together with entrepreneurs and private individuals
          achieve their goal through our personalized services and cutting-edge
          accounting software which automates the major accounting process. We
          have built a significant expertise to identify and implementing cost
          cutting exercise and increase your revenue instead just providing the
          contemporary year-end accounting services. Our dedicated accountant
          will be in touch with you time to time to support your business and
          update you with regulatory changes. We are open 7 days a week. We
          offer fixed fee pricing in all aspect of our bookkeeping and
          accounting services, so you will never have to be surprised with
          unexpected bill.
        </p>
        <div className="grid grid-cols-3 gap-5 my-10">
          {works.map((work) => (
            <WorkCard key={work.id} name={work.name} icon={work.icon} />
          ))}
        </div>
        <LinkButton to={`/fixed-fee-accountants`}>
          View Our Pricing Plan
        </LinkButton>
      </div>
    </section>
  );
};

export default WhatWeDo;
