import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import "../sass/profileInfo.scss";
import EditProfile from "./EditProfile";
import MyProfile from "./MyProfile";

const Profile = () => {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div className="profileInfo__sec">
        <nav className="profileInfo__nav">
          <ul className="profileInfo__ul">
            <li className="profileInfo__li">
              <NavLink to={`${url}/profile`} className="link__hide">
                Profile Info
              </NavLink>
            </li>
            <li className="profileInfo__li profileInfo__li-2">
              <NavLink to={`${url}/editprofile`} className="profileInfo__link">
                Edit
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={`${path}/profile`}>
            <MyProfile></MyProfile>
          </Route>
          <Route path={`${path}/editprofile`}>
            <EditProfile></EditProfile>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Profile;
