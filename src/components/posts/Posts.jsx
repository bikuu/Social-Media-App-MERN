import "./Posts.css";
import { PostsData } from "./../../dummyData/PostsData";
import Post from "./../post/Post";
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
