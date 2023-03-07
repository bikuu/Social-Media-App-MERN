import "./ProfileCard.css";
import Cover from "./../../img/cover.jpg";
import Profile from "./../../img/chocolate.jpg";
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Bibek Lama</span>
        <span>Web Design and Developer</span>
      </div>
      <div className="followStatus">
        <div className="topLine"></div>
        <div className="follow">
          <div>
            <span>1234</span>
            <span>Followings</span>
          </div>
          <div className="midLine"></div>
          <div>
            <span>2</span>
            <span>Followers</span>
          </div>
        </div>
        <div className="bottomLine"></div>
      </div>
      <span>View My Profile</span>
    </div>
  );
};

export default ProfileCard;
