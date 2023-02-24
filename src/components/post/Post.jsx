import React from "react";
import "./Post.css";
import Heart from "./../../Icons/heart.png";
import HeartFilled from "./../../Icons/heart-filled.png";
import Comment from "./../../Icons/comment.png";
import Share from "./../../Icons/share.png";
const Post = ({ data, id }) => {
  return (
    <div className="Post" key={id}>
      <img src={data.img} alt="" />
      <div className="postReact">
        <img src={data.liked ? HeartFilled : Heart} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span>{data.likes} likes</span>
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
