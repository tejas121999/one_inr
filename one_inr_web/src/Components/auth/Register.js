import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="site-main">
      <div className="page-title background-page">
        <div className="container">
          <h1>Register</h1>
          <div class="breadcrumbs">
            <ul style={{ marginLeft: "-2.5em" }}>
              <li>
                <Link to="/">Home</Link>
                <span>/</span>
              </li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-content">
          <div className="form-login form-register">
            <h2>Register for free</h2>
            <form
              action="https://oneinr.com/login"
              method="POST"
              id="registerForm"
              className="clearfix"
              autocomplete="off"
            >
              <div className="field">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="name"
                  //   value=""
                  required=""
                  autofocus=""
                  placeholder="Name"
                  autocomplete="off"
                />
              </div>
              <div className="field">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  //   value=""
                  required=""
                  placeholder="Email"
                  autocomplete="off"
                />
              </div>
              <div className="field">
                <input
                  id="mobile"
                  type="tel"
                  className="form-control"
                  name="mobile"
                  //   value=""
                  required=""
                  placeholder="Mobile"
                  maxlength="10"
                  autocomplete="off"
                />
              </div>
              <div className="field">
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required=""
                  autocomplete="off"
                />
              </div>
              <div className="field">
                <input
                  id="password-confirm"
                  type="password"
                  className="form-control"
                  name="password_confirmation"
                  required=""
                  placeholder="Confirm Password"
                  autocomplete="off"
                />
              </div>
              <div className="inline clearfix">
                <button
                  type="submit"
                  value="Send Messager"
                  className="btn-primary"
                >
                  Register
                </button>
                <p>
                  Existing User? <Link to="/login">Login Now</Link>
                </p>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
