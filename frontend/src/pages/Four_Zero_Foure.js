import React from "react";
import { NavLink } from "react-router-dom";
import "./Four_Zero_Foure.css";
const Four_Zero_Foure = () => {
  document.title = "Page not Found";
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>
                  <p>the page you are looking for not avaible!</p>
                  <NavLink exect activeClassName="link_404" to="/login">
                    Go to Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Four_Zero_Foure;
