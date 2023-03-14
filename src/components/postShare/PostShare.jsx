import { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImg from "./../../img/chocolate.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "./../../api/ApiCalls";
import { setPosts } from "../../redux/slice/postSlice";
const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.data);

  const onImageChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPOst = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPOst.image = filename;
      try {
        await uploadImage(data);
      } catch (error) {
        console.log(error);
      }
    }
    const post = await uploadPost(newPOst);
    dispatch(setPosts(post.data));
    setImage(null);
    desc.current.value = "";
  };
  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="" />
      <div>
        <input type="text" placeholder="What's happening ?" ref={desc} />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery /> Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle /> Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint /> Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule /> Schedule
          </div>
          <button className="btn ps-btn" onClick={handleSubmit}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="uploadImg"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
