import React, { useState } from "react";
import "./header.css";
import logo from "../images/logo.png";
import Dashboard from "../images/dashboard.png";
import Master from "../images/master.png";
import Donors from "../images/donor.png";
import NGO from "../images/ngo.png";
import Project from "../images/project.png";
import Accounts from "../images/account.png";
import Setting from "../images/settings.png";
import DonarEmail from "../images/email.png";
import Logout from "../images/logout.png";
const Header = () => {
  const [toggleMaster, setToggleMaster] = useState(false);
  const [toggleDonars, setToggleDonars] = useState(false);
  const [toggleNgo, setToggleNgo] = useState(false);
  const [toggleProject, setToggleProject] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(false);
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <input type="checkbox" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner top" />
        <div className="spinner middle" />
        <div className="spinner bottom" />
      </label>
      <div id="sidebarMenu">
        <ul className="menu">
          <li className="Dashboard_link d-flex">
            <div className="menu_item">
              <img src={Dashboard} alt="Dashboard" />
              <span>Dashboard</span>
            </div>
          </li>
          <label
            for="toggleMaster"
            className="Dashboard_link2 d-flex justify-content-between"
          >
            <div className="menu_item">
              <img src={Master} alt="Master" width="30" />
              <span>Master</span>
            </div>
            <input type="checkbox" id="toggleMaster" />
            <label for="toggleMaster" class="sidebarIconToggle">
              <i class="fa fa-angle-up"></i>
            </label>
          </label>

          <li
            className="Dashboard_link d-flex justify-content-between"
            onClick={() => {
              setToggleDonars(!toggleDonars);
            }}
          >
            <div className="menu_item">
              <img src={Donors} alt="Donors" />
              <span>Donors</span>
            </div>
            <i
              class={`fa ${
                toggleDonars ? "fa-angle-right" : "fa-angle-down"
              } pr-3 pr-3`}
            ></i>
          </li>
          <li
            className="Dashboard_link d-flex justify-content-between"
            onClick={() => {
              setToggleNgo(!toggleNgo);
            }}
          >
            <div className="menu_item">
              <img src={NGO} alt="NGO" />
              <span>NGO</span>
            </div>
            <i
              class={`fa ${
                toggleNgo ? "fa-angle-right" : "fa-angle-down"
              } pr-3 pr-3`}
            ></i>
          </li>
          <li
            className="Dashboard_link d-flex justify-content-between"
            onClick={() => {
              setToggleProject(!toggleProject);
            }}
          >
            <div className="menu_item">
              <img src={Project} alt="Project" />
              <span>Project</span>
            </div>
            <i
              class={`fa ${
                toggleProject ? "fa-angle-right" : "fa-angle-down"
              } pr-3 pr-3`}
            ></i>
          </li>
          <li
            className="Dashboard_link d-flex justify-content-between"
            onClick={() => {
              setToggleDonars(!toggleAccount);
            }}
          >
            <div className="menu_item">
              <img src={Accounts} alt="Accounts" />
              <span>Accounts</span>
            </div>
            <i
              class={`fa ${
                toggleAccount ? "fa-angle-right" : "fa-angle-down"
              } pr-3 pr-3`}
            ></i>
          </li>
          <li
            className="Dashboard_link"
            onClick={() => {
              setToggleDonars(!toggleDonars);
            }}
          >
            <div className="menu_item">
              <img src={Setting} alt="Setting" />
              <span>Setting</span>
            </div>
          </li>
          <li className="Dashboard_link">
            <img src={DonarEmail} alt="DonarEmail" />
            <span>Donar Email</span>
          </li>
          <li className="Dashboard_link">
            <img src={Logout} alt="Logout" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
