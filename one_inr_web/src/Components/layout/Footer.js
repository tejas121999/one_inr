import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import "./Layout.css";

const footerItem = [
  {
    to: "/",
    name: "home",
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
];

const Footer = () => {
  return (
    <footer className="footer-04">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 mb-md-0 mb-4">
            <h2 className="footer-heading">OUR COMPANy</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-1 d-block">
                  Buy &amp; Sell
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  Merchant
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  Giving back
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  Help &amp; Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 mb-md-0 mb-4">
            <h2 className="footer-heading">Categories</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-1 d-block">
                  Buy &amp; Sell
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  Merchant
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  Giving back
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  Help &amp; Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 mb-md-0 mb-4">
            <h2 className="footer-heading">Subcribe</h2>
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
      <div className="w-100 mt-5 border-top py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <p className="copyright">
                Copyright &copy; All rights reserved | This template is made
                with by
                <a href="#" target="_blank">
                  Oneinr.com
                </a>{" "}
              </p>
            </div>
            <div className="col-md-6 col-lg-4 text-md-right">
              <p className="mb-0 list-unstyled">
                <a className="mr-md-3" href="#">
                  back to top
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
