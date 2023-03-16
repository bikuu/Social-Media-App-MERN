import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "profilePicture.jpg"
          }
          alt=""
        />
      </div>
      <div className="ProfileName">
        <span>{`${user.firstname} ${user.lastname}`}</span>
        <span>Web Design and Developer</span>
      </div>
      <div className="followStatus">
        <div className="topLine"></div>
        <div className="follow">
          <div>
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="midLine"></div>
          <div>
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
        </div>
        <div className="bottomLine"></div>
      </div>
      <span>
        <Link
          to={`/profile/${user._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          View My Profile
        </Link>
      </span>
    </div>
  );
};

export default ProfileCard;
