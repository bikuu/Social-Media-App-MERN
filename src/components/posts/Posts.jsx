import "./Posts.css";
import Post from "./../post/Post";
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from "../../api/ApiCalls";
import { useEffect } from "react";
import { setPosts } from "../../redux/slice/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.data);
  const { post } = useSelector((state) => state.post.data);
  useEffect(() => {
    if (!post) {
      getTimelinePosts(user._id)
        .then((response) => {
          dispatch(setPosts(response.data));
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className="Posts">
      {/* {post.map((post, id) => {
        return <Post data={post} id={id} />;
      })} */}
    </div>
  );
};

export default Posts;
