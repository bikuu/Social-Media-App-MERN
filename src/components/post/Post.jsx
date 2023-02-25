import React from "react";
import "./Post.css";
import Heart from "./../../Icons/heart.png";
import HeartFilled from "./../../Icons/heart-filled.png";
import { UilShare, UilCommentAltDots } from "@iconscout/react-unicons";
const Post = ({ data, id }) => {
  return (
    <div className="Post" key={id}>
      <img src={data.img} alt="" />
      <div className="postReact">
        <img src={data.liked ? HeartFilled : Heart} alt="" />

        <UilCommentAltDots />
        <UilShare />
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
