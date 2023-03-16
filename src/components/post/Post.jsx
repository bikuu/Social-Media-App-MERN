import "./Post.css";
import Heart from "./../../Icons/heart.png";
import HeartFilled from "./../../Icons/heart-filled.png";
import { UilShare, UilCommentAltDots } from "@iconscout/react-unicons";
import { likePost } from "../../api/ApiCalls";
import { useSelector } from "react-redux";
import { useState } from "react";
const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />
      <div className="postReact">
        <img src={liked ? HeartFilled : Heart} alt="" onClick={handleLike} />

        <UilCommentAltDots />
        <UilShare />
      </div>
      <span> {likes} likes</span>
      <div className="detail">
        <span>
          <b> {data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
