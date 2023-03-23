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

  const [profilePicture, setprofilePicture] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profilePicture"
        ? setprofilePicture(img)
        : setCoverImage(img);
    }
  };

  // form submission
  const handleSave = (e) => {
    e.preventDefault();
    seteditProfile(false);
    profileRef.current.scrollIntoView({ behavior: "smooth" });

    let UserData = formData;
    if (profilePicture) {
      const data = new FormData();
      const fileName = Date.now() + profilePicture.name;
      data.append("name", fileName);
      data.append("file", profilePicture);
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
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <span>Last Name</span>{" "}
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          <span>Email Address</span>{" "}
          <input
            type="email"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <span>Age</span>{" "}
          <input
            type="number"
            value={formData.age}
            name="age"
            onChange={handleChange}
          />
          <span>Where Do You Live ?</span>{" "}
          <input
            type="text"
            value={formData.livesin}
            name="livesin"
            onChange={handleChange}
          />
          <span>Gender</span>{" "}
          <input
            type="text"
            value={formData.gender}
            name="gender"
            onChange={handleChange}
          />
          <span> Profile image</span>
          <input type="file" name="profilePicture" onChange={onImageChange} />
          <span> Cover image</span>
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <div className="edit-section">
          <h2>Education History</h2>
          <span>Your Highest Degree </span>{" "}
          <input
            type="text"
            name="degree"
            value={
              formData.education
                ? formData.education.map((data) => data.degree)
                : "Write your Latest Degree"
            }
            onChange={handleChange}
          />
          <span>Graduated From</span>{" "}
          <input
            type="text"
            name="gradFrom"
            value={
              formData.education
                ? formData.education.map((data) => data.gradFrom)
                : "Graduated University/College"
            }
            onChange={handleChange}
          />
          <span>Graduated Date</span>{" "}
          <input
            type="text"
            name="gradDate"
            value={
              formData.education
                ? formData.education.map((data) => data.gradDate)
                : "Please write your date (dd/mm/yy)"
            }
            onChange={handleChange}
          />
        </div>
        <div className="edit-section">
          <h2>Working Information</h2>
          <span>Current Work</span>{" "}
          <input
            type="text"
            value={
              formData.work
                ? formData.work.map((data) => data.worksAt)
                : "Where do/did you work"
            }
            name="worksAt"
            onChange={handleChange}
          />
          <span>Work Postion</span>{" "}
          <input
            type="text"
            name="position"
            value={
              formData.work
                ? formData.work.map((data) => data.position)
                : "What is/was your position"
            }
            onChange={handleChange}
          />
          <span>Work Experience</span>
          <input
            type="text"
            name="experience"
            value={
              formData.work
                ? formData.work.map((data) => data.experience)
                : "Write your experience (1 year or 6 months)"
            }
            onChange={handleChange}
          />
          <span>Qualifications</span>{" "}
          <input
            type="text"
            name="qualification"
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
