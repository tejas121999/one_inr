import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import "./Layout.css";
import { Link } from "react-router-dom";

const ourCompanyItem = [
  {
    to: "/about",
    name: "About US",
    exact: true,
  },
  {
    to: "/how_it_works",
    name: "How It Works",
    exact: true,
  },
  {
    to: "/what_is_this",
    name: "What is this",
    exact: true,
  },
  {
    to: "/contact",
    name: "Contact",
    exact: true,
  },
];

const campaningItem = [
  {
    to: "/start-your-campaign",
    name: "Start Your Campaninges",
    exact: true,
  },
  {
    to: "/campaigns",
    name: "donate to a cause",
    exact: true,
  },
  {
    to: "/terms-of-use",
    name: "Terms of Use",
    exact: true,
  },
  {
    to: "/privacy-policy",
    name: "Privacy Policy",
    exact: true,
  },
];

const Footer = () => {
  return (
    <footer className="footer-04">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 mb-md-0 mb-4">
            <h2 className="footer-heading">OUR COMPANY</h2>
            <ul className="list-unstyled">
              {ourCompanyItem.map(({ to, name, exact }, index) => (
                <li key={index}>
                  <Link to={to} exact={exact} className="py-1 d-block">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 mb-md-0 mb-4">
            <h2 className="footer-heading">Categories</h2>
            <ul className="list-unstyled">
              {campaningItem.map(({ to, name, exact }, index) => (
                <li key={index}>
                  <Link to={to} exact={exact} className="py-1 d-block">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 mb-md-0 mb-4">
            <h2 className="footer-heading">NEWSLETTER</h2>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <button
                  type="submit"
                  className="form-control submit rounded-right"
                >
                  <span className="sr-only">Submit</span>
                  <DraftsIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-100 border-top py-3 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <p className="copyright">2018 by One INR. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 col-lg-4 text-md-right">
              <p className="mb-0 list-unstyled">
                <Link className="mr-md-3" to="#">
                  back to top <i class="bi bi-arrow-up"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
