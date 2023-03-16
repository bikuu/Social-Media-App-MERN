import "./Profile.css";
import RightSide from "../../components/rightSide/RightSide";
import ProfilePageSide from "../../components/profilePageSide/ProfilePageSide";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfilePageSide />
      <RightSide />
    </div>
  );
};

export default Profile;
