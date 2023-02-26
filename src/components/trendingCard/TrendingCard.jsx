import React from "react";
import "./TrendingCard.css";
import { TrendingData } from "./../../dummyData/TrendingData";
const TrendingCard = () => {
  return (
    <div className="TrendingCard">
      <h2>Trendings</h2>
      {TrendingData.map((data, id) => {
        return (
          <div className="trend" key={id}>
            <span>#{data.name}</span>
            <span>{data.shares} shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingCard;
