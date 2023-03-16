import React, { useState } from "react";
import "./ProfileEdit.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../redux/actions/UploadAction";
import { updateUser } from "./../../redux/actions/UserAction";

const ProfileEdit = ({ seteditProfile, profileRef }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { password, ...other } = user;

  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  // form submission
  const handleSave = (e) => {
    e.preventDefault();
    seteditProfile(false);
    profileRef.current.scrollIntoView({ behavior: "smooth" });
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
  };
  return (
    <div className="ProfileEdit ">
      <div className="edit-wrapper">
        <div className="edit-section">
          <h2>General Information</h2>
          <span>First Name</span>{" "}
          <input
            type="text"
            value={formData.firstname}
            onChange={handleChange}
          />
          <span>Last Name</span>{" "}
          <input
            type="text"
            value={formData.lastname}
            onChange={handleChange}
          />
          <span>Email Address</span>{" "}
          <input
            type="email"
            value={formData.username}
            onChange={handleChange}
          />
          <span>Age</span>{" "}
          <input type="number" value={formData.age} onChange={handleChange} />
          <span>Where Do You Live ?</span>{" "}
          <input type="text" value={formData.livesin} onChange={handleChange} />
          <span>Gender</span>{" "}
          <input type="text" value={formData.gender} onChange={handleChange} />
          <span> Profile image</span>
          <input type="file" name="profileImage" onChange={onImageChange} />
          <span> Cover image</span>
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <div className="edit-section">
          <h2>Education History</h2>
          <span>Your Highest Degree </span>{" "}
          <input
            type="text"
            value={formData.education.degree}
            onChange={handleChange}
          />
          <span>Graduated From</span>{" "}
          <input
            type="text"
            value={formData.education.gradFrom}
            onChange={handleChange}
          />
          <span>Graduated Date</span>{" "}
          <input
            type="date"
            value={formData.education.gradDate}
            onChange={handleChange}
          />
        </div>
        <div className="edit-section">
          <h2>Working Information</h2>
          <span>Current Work</span>{" "}
          <input type="text" value={formData.worksAt} onChange={handleChange} />
          <span>Work Postion</span>{" "}
          <input
            type="text"
            value={formData.position}
            onChange={handleChange}
          />
          <span>Work Experience</span>
          <input
            type="text"
            value={formData.experience}
            onChange={handleChange}
          />
          <span>Qualifications</span>{" "}
          <input
            type="text"
            value={
              formData.qualification
                ? formData.qualification
                : "Eg: Web Developer, Backend Developer , etc"
            }
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="pfSave-btn" onClick={handleSave}>
        Save
      </button>
      <div className="bottom-line"></div>
    </div>
  );
};

export default ProfileEdit;
