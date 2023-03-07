import PostSide from "../../components/postSide/PostSide";
import ProfileSides from "../../components/profileSide/ProfileSides";
import RightSide from "../../components/rightSide/RightSide";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <ProfileSides />
      <PostSide />
      <RightSide />
    </div>
  );
}
