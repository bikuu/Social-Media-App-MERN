import { useRef, useState } from "react";
import "./ProfilePageSide.css";
import Cover from "./../../img/cover.jpg";
import Profile from "./../../img/chocolate.jpg";
import PostSide from "../postSide/PostSide";
import ProfileInfo from "../profileInfo/ProfileInfo";
import ProfileEdit from "../profileEdit/ProfileEdit";
import { useDispatch } from "react-redux";
import { logout } from './../../redux/actions/AuthActions';
const ProfilePageSide = () => {
  const dispatch = useDispatch();
  const [editProfile, seteditProfile] = useState(false);
  const profileRef = useRef(null);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="ProfilePageSide">
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
          <button className="btn logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
      <div className="NewbottomLine"></div>
      <div className="profile-container">
        <div
          className={`profileShowEdit ${
            editProfile ? "showProfileEdit" : "showProfileInfo"
          }`}
          ref={profileRef}
        >
          {editProfile ? (
            <ProfileEdit
              seteditProfile={seteditProfile}
              profileRef={profileRef}
            />
          ) : (
            <ProfileInfo seteditProfile={seteditProfile} />
          )}
        </div>
        <PostSide />
      </div>
    </div>
  );
};

export default ProfilePageSide;
