import React from "react";
import oneinrlogo from "../Images/one-inr.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Layout.css";

const navbarItem = [
  {
    to: "/",
    name: "home",
    exact: true,
  },
  {
    to: "/about",
    name: "About Us",
    exact: true,
  },
  {
    to: "/campaninges",
    name: "Campaninges",
    exact: true,
  },
  {
    to: "/contact",
    name: "Contact",
    exact: true,
  },
  {
    to: "/login",
    name: "Login",
    exact: true,
  },
  {
    Icon: SearchIcon,
  },
];

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm">
          <div className="container">
            <a className="navbar-brand">
              <strong className="h6 mb-0 font-weight-bold text-uppercase">
                <Link className="navbar-brand" to="/">
                  <img src={oneinrlogo} alt="logo_1INR" />
                </Link>
              </strong>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                {navbarItem.map(({ to, name, exact, Icon }, index) => (
                  <div>
                    <li className="nav-item" key={index}>
                      <Link className="nav-link" to={to} exact={exact}>
                        {name}
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
