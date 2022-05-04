import React from "react";
import CapiumLogo from "../images/capium.png";
import IfaLogo from "../images/ifa-logo.png";
import TaxiLogo from "../images/taxi-resized-logo.png";
import QuickBooksLogo from "../images/quickbooks.svg";

const Companies = () => {
  const companies = [
    { id: 1, logo: IfaLogo },
    { id: 2, logo: TaxiLogo, shortLength: true },
    { id: 3, logo: CapiumLogo },
    { id: 4, logo: QuickBooksLogo },
  ];
  return (
    <section className="w-full bg-white">
      <div className="py-20 max-w-4xl mx-auto px-20 grid grid-cols-4 gap-10">
        {companies.map((company) => (
          <div className={`flex items-center`} key={company.id}>
            <img
              className={`w-full h-full object-contain cursor-pointer p-5 ${
                company.shortLength ? `h-[75%]` : `h-full`
              }`}
              src={company.logo}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
