import React from "react";
import banner from "../Images/imgHome.jpeg";
import "./Home.css";

const Banner = () => {
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
            style={{ background: "rgba(0,0,0,0.44)" }}
          />
          <div
            className="carousel-caption d-md-block text-left"
            style={{ right: "45%", bottom: "35%", left: "10%" }}
          >
            <h1 style={{ marginBottom: "2rem" }}>Pehli Roti Dayitva Ki</h1>
            <h4 style={{ marginBottom: "2rem" }}>
              1INR has collaborated with Hunger Project by Lions Club of
              Millennials and Lions Club of Churchgate Mumbai supported by Roti
              Bank.
            </h4>
            <div style={{ height: "8px" }} className="progress rounded-pill">
              <div
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
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
    </div>
  );
};

export default Banner;
