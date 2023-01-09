import React from "react";
import AchievementBlock from "./AchievementBlock";
import HappyIcon from "../images/icons/happy.svg";
import BadgeIcon from "../images/icons/badge.svg";
import ThumbsIcon from "../images/icons/thumbs.svg";
import TaxIcon from "../images/icons/tax.svg";
import { graphql, useStaticQuery } from "gatsby";

const Achievements = () => {
  const data = useStaticQuery(graphql`
    query AchievementsQuery {
      allContentfulAchievements(sort: { order: ASC, fields: achievementId }) {
        nodes {
          name
          symbol
          number
          achievementId
          icon {
            url
          }
        }
      }
    }
  `);

  const achievementData = data?.allContentfulAchievements?.nodes;

  return (
    <section className="bg-secondary text-white ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto   py-20">
        {achievementData.map((item) => (
          <AchievementBlock
            target={item.number}
            title={item.name}
            duration={2}
            symbol={item.symbol}
            icon={item.icon.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
