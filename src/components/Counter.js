import React from "react";
import CounterBlock from "./CounterBlock";
import HappyIcon from "../images/icons/happy.svg";
import BadgeIcon from "../images/icons/badge.svg";
import ThumbsIcon from "../images/icons/thumbs.svg";
import TaxIcon from "../images/icons/tax.svg";

const Counter = () => {
  return (
    <section className="bg-secondary text-white ">
      <div className="grid grid-cols-4 container mx-auto px-20 py-20">
        <CounterBlock
          target={172}
          title="Tax Services"
          duration={2}
          symbol="+"
          icon={TaxIcon}
        />
        <CounterBlock
          target={100}
          title="Recommended"
          duration={2}
          symbol="%"
          icon={ThumbsIcon}
        />
        <CounterBlock
          target={12}
          title="Years of Experience"
          duration={2}
          symbol="+"
          icon={BadgeIcon}
        />
        <CounterBlock
          target={500}
          title="Happy Clients"
          duration={2}
          symbol="+"
          icon={HappyIcon}
        />
      </div>
    </section>
  );
};

export default Counter;
