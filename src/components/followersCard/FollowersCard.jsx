import React from "react";
import "./FollowersCard.css";
import { Followers } from "./../../dummyData/FollowersData";
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>My Followers</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImg" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="btn fc-btn">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
