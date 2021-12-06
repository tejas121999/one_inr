import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="site-main">
      <div className="container">
        <h4 style={{ margin: "0" }}>My Profile</h4>
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
            <div className="col-lg-3">
              <nav className="account-bar">
                <ul style={{ paddingLeft: "0" }}>
                  <li id="profile" className="active">
                    <Link to="/profile">Profile Info</Link>
                  </li>
                  <li id="profile_password">
                    <Link to="/profile/password">Profile Password</Link>
                  </li>
                  <li id="campaigns">
                    <Link to="/backed-campaigns">Backed Campaigns</Link>
                  </li>
                  <li id="wallet">
                    <Link to="/wallet">Wallet</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9">
              <div className="account-content profile">
                <h3 className="account-title">My Profiles</h3>
                <div className="account-main">
                  <div className="profile-box">
                    <div className="row">
                      <div className="col-lg-6">
                        <h3>Profile Infomations</h3>
                        <form
                          method="POST"
                          action="https://oneinr.com/profile/update"
                          accept-charset="UTF-8"
                          autocomplete="off"
                        >
                          <input
                            name="_token"
                            type="hidden"
                            value="lvmcW2FYe0dqL2Jo0e6xFOACLAWVFw0n9Q2ziZCc"
                            autocomplete="off"
                          />
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              className="form-control"
                              placeholder="Name"
                              name="name"
                              type="text"
                              value="Tejas Talkar"
                              autocomplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <label>Mobile</label>
                            <input
                              className="form-control"
                              placeholder="Mobile"
                              maxlength="10"
                              name="mobile"
                              type="text"
                              value="8850618762"
                              autocomplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              className="form-control"
                              placeholder="Email"
                              name="email"
                              type="email"
                              value="tejas@gmail.com"
                              autocomplete="off"
                            />
                          </div>
                          <button type="submit" className="btn-primary">
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
