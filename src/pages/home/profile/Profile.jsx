import "./Profile.css";
import RightSide from "./../../../components/rightSide/RightSide";
import NewProfileSide from "../../../components/newProfileSide/NewProfileSide";
const Profile = () => {
  return (
    <div className="Profile">
      <NewProfileSide />
      <RightSide />
    </div>
  );
};

export default Profile;
