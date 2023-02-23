import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import "./ProfileSides.css";
const ProfileSides = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSides;
