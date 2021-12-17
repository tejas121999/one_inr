import React from "react";
import "../sass/myProfile.scss";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <h6 className="myProfile__title">My Profiles</h6>
      <div className="myProfile__main">
        <h5 className="myProfile__main-title">Profile Information</h5>
        <ul className="myProfile__ul">
          <li className="myProfile__ul--li">
            <strong>Name :</strong>
            <div className="myProfile__ul--li-text">
              <p> Priyank Ranka</p>
            </div>
          </li>
          <li className="myProfile__ul--li">
            <strong>Mobile :</strong>
            <div className="myProfile__ul--li-text">
              <p> 9819312721</p>
            </div>
          </li>
          <li className="myProfile__ul--li">
            <strong>Email :</strong>
            <div className="myProfile__ul--li-text">
              <p> admin@nimapinfotech.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
