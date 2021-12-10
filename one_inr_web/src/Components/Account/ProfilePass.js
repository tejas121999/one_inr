import React from "react";
import { Link } from "react-router-dom";

const ProfilePass = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div class="">
            <div className="">
              <div className="account-content profile">
                <h3 className="account-title">My Profiles</h3>
                <div className="account-main">
                  <div className="profile-box">
                    <div className="row">
                      <div className="col-lg-6">
                        <h3>Change Password</h3>
                        <form
                          method="POST"
                          action="/profile/password"
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
                            <label>Current Password</label>
                            <input
                              type="password"
                              name="current_password"
                              className="form-control"
                              placeholder="Current Password"
                              required=""
                              autocomplete="off"
                            />
                          </div>

                          <div className="form-group">
                            <label>New Password</label>
                            <input
                              type="password"
                              name="new_password"
                              className="form-control"
                              placeholder="New Password"
                              autocomplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <label>Confirmed Password</label>
                            <input
                              type="password"
                              name="new_password_confirmation"
                              className="form-control"
                              placeholder="Confirmed Password"
                              autocomplete="off"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn-primary pull-right"
                          >
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

export default ProfilePass;
