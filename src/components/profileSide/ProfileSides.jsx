import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import ProfileCard from "../profileCard/ProfileCard";
import "./ProfileSides.css";
const ProfileSides = () => {
  return (
    <div className="profileSide">
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSides;
