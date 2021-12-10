import React from "react";
import { Link } from "react-router-dom";
import DescoverCamp from "../Home/DescoverCamp";
import TopImg_1 from "../Images/descovr_camp/Sponsoring_Books_for_Students.jpeg";
import logo_img from "../Images/ngo_logo.png";

const Campaigns = () => {
  return (
    <div className="site-main">
      <div className="container">
        <div
          className="row mb-3"
          // style={{ maxWidth: "540cm", maxHeight: "450cm" }}
        >
          <div className="col-6">
            <Link to="/sponsoring_books">
              <img src={TopImg_1} className="img-fluid rounded-start" />
            </Link>
          </div>
          <div className="col-6 text-left">
            <div className="card-body">
              <Link to="/sponsoring_books" className="card-title h2">
                Sponsoring Books for Students
              </Link>
              <p className="card-text">
                Providing the children with free books will help them to learn
                and grow as well as help them to become better human beings.
              </p>
              <p className="card-text mt-5">
                <img
                  src={logo_img}
                  style={{ maxWidth: "1.5cm", marginRight: "5px" }}
                />
                by Pyaribai Girdharilal Ranka Foundation
              </p>
            </div>
            <div
              style={{ height: "8px" }}
              className="progress rounded-pill mt-2"
            >
              <div
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "60%" }}
                className="progress-bar progress-bar-striped progress-bar-animated rounded-pill"
              ></div>
            </div>
            <div className="row mt-4">
              <div className="col-xl-3 col-md-6">
                <span>
                  ₹ 6842
                  <p>Goal</p>
                </span>
              </div>
              <div className="col-xl-3 col-md-6">
                <span>
                  ₹ 0<p>Funded</p>
                </span>
              </div>
              <div className="col-xl-3 col-md-6">
                <span>
                  24
                  <p>Days Left</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DescoverCamp />
    </div>
  );
};

export default Campaigns;
