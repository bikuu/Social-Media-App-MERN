import "./ProfileInfo.css";
import {
  UilBag,
  UilGraduationCap,
  UilLocationPoint,
  UilHeart,
} from "@iconscout/react-unicons";
import FollowersCard from "./../followersCard/FollowersCard";
const ProfileInfo = ({ seteditProfile }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    seteditProfile(true);
  };

  return (
    <div className="Profile-Container">
      <div className="ProfileInfo">
        <h2>Info</h2>
        <div className="info-wrapper">
          <div className="info-list">
            <span>
              <UilBag />
            </span>
            <span>
              Works @ <strong>Freelance</strong>
            </span>
          </div>
          <div className="info-list">
            <span>
              {" "}
              <UilGraduationCap />{" "}
            </span>{" "}
            <span>
              Studied{" "}
              <strong>
                <i>Bachelors of Science in Computing</i>{" "}
              </strong>
              from <strong>Softwarica College of IT and E-Commerce</strong>
            </span>
          </div>
          <div className="info-list">
            <span>
              <UilLocationPoint />
            </span>
            <span>
              Lives in <strong>Kathmanu, Nepal</strong>
            </span>
          </div>
          <div className="info-list">
            <span>
              {" "}
              <UilHeart />{" "}
            </span>
            <span>
              <strong>In a Relationship</strong>
            </span>
          </div>
        </div>
        <button className="pfEdit-btn" onClick={handleEdit}>
          Edit
        </button>
        <div className="bottom-line"></div>
      </div>
      <FollowersCard />
    </div>
  );
};

export default ProfileInfo;
