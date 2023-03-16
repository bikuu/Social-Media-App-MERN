import "./ProfileInfo.css";
import {
  UilBag,
  UilGraduationCap,
  UilLocationPoint,
  UilHeart,
} from "@iconscout/react-unicons";
import FollowersCard from "./../followersCard/FollowersCard";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../api/ApiCalls";

const ProfileInfo = ({ seteditProfile }) => {
  const params = useParams();
  const paramsId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (paramsId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await getUser(paramsId);
        setProfileUser(profileUser);
      }
      fetchProfileUser();
    };
  }, [user]);

  const handleEdit = (e) => {
    e.preventDefault();
    seteditProfile(true);
  };

  return (
    <div className="Profile-Container">
      <div className="ProfileInfo">
        <h2>Info</h2>
        <div className="info-wrapper">
          {profileUser.worksAt
            ? ` <div className="info-list">
            <span>
              <UilBag />
            </span>
            <span>
               Works @ <strong>${profileUser.worksAt}</strong>
            </span>
             
          </div>`
            : ""}
          {profileUser.education
            ? `<div className="info-list">
              <span>
                {" "}
                <UilGraduationCap />{" "}
              </span>{" "}
              <span>
                Studied{" "}
                <strong>
                  <i>${profileUser.education.degree}</i>{" "}
                </strong>
                from <strong>${profileUser.education.name}</strong>
              </span>
            </div>`
            : ""}

          <div className="info-list">
            <span>
              <UilLocationPoint />
            </span>
            <span>
              Lives in{" "}
              <strong>
                {profileUser.livesin ? profileUser.livesin : "Your Address"}
              </strong>
            </span>
          </div>

          {profileUser.relationship ? (
            <div className="info-list">
              <span>
                {" "}
                <UilHeart />{" "}
              </span>
              <span>
                <strong>In a Relationship</strong>
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        {user._id === paramsId ? (
          <button className="pfEdit-btn" onClick={handleEdit}>
            Edit
          </button>
        ) : (
          ""
        )}
        <div className="bottom-line"></div>
      </div>
      <FollowersCard />
    </div>
  );
};

export default ProfileInfo;
