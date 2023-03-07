import React from "react";
import "./ProfileEdit.css";

const ProfileEdit = ({ seteditProfile, profileRef }) => {
  const handleSave = (e) => {
    e.preventDefault();
    seteditProfile(false);
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="ProfileEdit ">
      <div className="edit-wrapper">
        <div className="edit-section">
          <h2>General Information</h2>
          <span>Full Name</span>{" "}
          <input type="text" id="fullName" value={"Bibek Lama"} />
          <span>Email Address</span>{" "}
          <input type="email" id="fullName" value={"bibek@gmail.com"} />
          <span>Age</span> <input type="number" id="fullName" value={"12"} />
          <span>Where Do You Live ?</span>{" "}
          <input type="text" id="fullName" value={"Kathmanu, Nepal"} />
          <span>Gender</span> <input type="text" id="fullName" value={"Male"} />
        </div>
        <div className="edit-section">
          <h2>Education History</h2>
          <span>Your Highest Degree </span>{" "}
          <input
            type="text"
            id="fullName"
            value={"Bachelor of Science in Computing"}
          />
          <span>Graduated From</span>{" "}
          <input type="text" id="fullName" value={"Softwarica College"} />
          <span>Graduated Date</span>{" "}
          <input type="number" id="fullName" value={"12-12-2021"} />
        </div>
        <div className="edit-section">
          <h2>Working Information</h2>
          <span>Current Work</span>{" "}
          <input type="text" id="fullName" value={"Freelance"} />
          <span>Work Postion</span>{" "}
          <input type="text" id="fullName" value={"Freelance"} />
          <span>Work Experience</span>
          <input type="text" id="fullName" value={"1 years"} />
          <span>Qualifications</span>{" "}
          <input type="text" id="fullName" value={"Web Developer"} />
        </div>
      </div>
      <button className="pfSave-btn" onClick={handleSave}>
        Save
      </button>
      <div className="bottom-line"></div>
    </div>
  );
};

export default ProfileEdit;
