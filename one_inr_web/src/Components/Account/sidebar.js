import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
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
  );
};

export default SideBar;
