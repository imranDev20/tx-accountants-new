import React from "react";
import Logo from "./Logo";
import { Link } from "gatsby";
import { FaChevronRight } from "react-icons/fa";
import { useMenuQuery } from "../hooks/useMenuQuery";

const Footer = () => {
  const data = useMenuQuery();
  const menuItems = data.allContentfulPages.nodes;

  return (
    <footer className="bg-primary text-white py-20 px-10">
      <div className="max-w-5xl   mx-auto grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="pr-10">
          <Logo />
          <p className=" my-2">
            We help sole proprietors, self-employed consultants, start-ups and
            small-to-midsize organizations with a full suite of affordable tax
            and accounting services.
          </p>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mb-5">Pages</h3>
          {menuItems.map((menuItem) => (
            <Link
              className="text-white block my-2"
              key={menuItem.pageId}
              to={menuItem.slug === "home" ? `/` : `/${menuItem.slug}/`}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Subscribe</h3>
          <p className="mb-5 ">
            Sign up for Alerts, Special Offers, Education and Updates.
          </p>
          <div className="flex">
            <input
              className="px-3 outline-none text-fontColor focus:ring-2 focus:ring-secondary flex-grow"
              type="text"
              placeholder="Email"
            />
            <button className="px-5 py-4 bg-secondary hover:bg-white border border-transparent hover:border-secondary hover:text-secondary transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <p className="mx-auto text-center mt-10 text-sm">
        © 2022 by{" "}
        <Link className="hover:text-secondary transition" to="/">
          TX Accountants Ltd
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
