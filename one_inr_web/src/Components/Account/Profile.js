import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import BackedCampaigns from "../Account/BackedCampaigns";
import EditProfile from "../Account/EditProfile";
import Profile from "../Account/ProfileInfo";
import ProfilePass from "../Account/ProfilePass";
import Wallet from "../Account/Wallet";
import "../sass/campaigns.scss";

const MainProfile = () => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <div className="campaigns">
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
        <div className="campaigns__sec">
          <nav className="campaigns__nav">
            <ul className="campaigns__ul">
              <li className="campaigns__li">
                <NavLink
                  to={`${url}/profileinfo/profile`}
                  activeClassName="link-active"
                  className="link"
                >
                  Profile Info
                </NavLink>
              </li>
              <li className="campaigns__li">
                <NavLink
                  to={`${url}/profilepass`}
                  activeClassName="link-active"
                  className="link"
                >
                  Profile Password
                </NavLink>
              </li>

              <li className="campaigns__li">
                <NavLink
                  to={`${url}/backendcampaigns`}
                  activeClassName="link-active"
                  className="link"
                >
                  Backed Campaigns
                </NavLink>
              </li>
              <li className="campaigns__li">
                <NavLink
                  to={`${url}/wallet`}
                  activeClassName="link-active"
                  className="link"
                >
                  Wallet
                </NavLink>
              </li>
              <li className="campaigns__li">
                <NavLink
                  to={`${url}/editprofile`}
                  activeClassName="link-active"
                  className="link link__edit"
                >
                  Edit Profile
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path={`${path}/profileinfo`}>
              <Profile></Profile>
            </Route>
            <Route path={`${path}/profilepass`}>
              <ProfilePass></ProfilePass>
            </Route>
            <Route path={`${path}/editprofile`}>
              <EditProfile></EditProfile>
            </Route>
            <Route path={`${path}/backendcampaigns`}>
              <BackedCampaigns></BackedCampaigns>
            </Route>
            <Route path={`${path}/wallet`}>
              <Wallet></Wallet>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MainProfile;
