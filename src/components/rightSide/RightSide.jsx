import React from "react";
import TrendingCard from "../trendingCard/TrendingCard";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="rightSide">
      <TrendingCard />
      <div className="ads">
        <span>Your Ads Here</span>
      </div>
    </div>
  );
};

export default RightSide;
