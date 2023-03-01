import "./NewProfileSide.css";
import Cover from "./../../img/cover.jpg";
import Profile from "./../../img/chocolate.jpg";
import PostSide from "../postSide/PostSide";
import ProfileInfo from "./../profileInfo/ProfileInfo";
const NewProfileCard = () => {
  return (
    <div className="NewProfileSide">
      <div className="NewProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="NewProfileName">
        <div>
          <span className="name">Bibek Lama</span>
          <span>Web Design and Developer</span>
          <div className="Newfollow">
            <div>
              <span className="count">1234</span>
              <span>Followings</span>
            </div>
            <div className="NewmidLine"></div>
            <div>
              <span className="count">2</span>
              <span>Followers</span>
            </div>
          </div>
        </div>
        <div className="quote">
          <h3>Intro</h3>
          <p>Wherever I go, Death follows me</p>
        </div>
        <div className="logOut">
          <button className="btn logout-btn">Log Out</button>
        </div>
      </div>
      <div className="NewbottomLine"></div>
      <div className="profile-container">
        <ProfileInfo />
        <PostSide />
      </div>
    </div>
  );
};

export default NewProfileCard;
