import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import SideBar from "../Account/sidebar";
import EditProfile from "../Account/EditProfile";
import ProfilePass from "../Account/ProfilePass";

const Profile = () => {
  return (
    <div className="site-main">
      <div className="container">
        <h1>My Profile</h1>
        <div
          class="breadcrumbs"
          style={{ display: "inline-flex", marginBottom: "25px" }}
        >
          <Link to="/">Home</Link>
          <span>&nbsp;/&nbsp;</span>
          Profile
        </div>
      </div>

      <div className="account-wrapper">
        <div className="container">
          <div class="row">
            <SideBar />
            <div className="col-lg-9">
              <div className="account-content profile">
                <h3 className="account-title">My Profiles</h3>
                <div className="account-main">
                  <div className="profile-box">
                    <h3>Profile Information</h3>
                    <ul style={{ paddingLeft: "0" }}>
                      <li>
                        <strong>Name :</strong>
                        <div className="profile-text">
                          <p>Priyank Ranka</p>
                        </div>
                      </li>
                      <li>
                        <strong>Mobile :</strong>
                        <div className="profile-text">
                          <p>9819312721</p>
                        </div>
                      </li>
                      <li>
                        <strong>Email :</strong>
                        <div className="profile-text">
                          <p>admin@nimapinfotech.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Link to="/profile/edit" className="btn-primary">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
