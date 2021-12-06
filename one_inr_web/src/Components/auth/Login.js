import React, { useEffect, useState } from "react";
import ErrorValidation from "./ErrorValidation";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { onLogin } from "../../../Redux/Authentication/AuthAction";
import { Link, useHistory } from "react-router-dom";

export default function Login({ location }) {
  //   const dispatch = useDispatch();
  const [show, setShow] = useState("false");

  //   const auth = useSelector((state) => state.auth);
  //   const { authenticate } = auth;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  let history = useHistory();
  //   useEffect(() => {
  //     if (authenticate) {
  //       history.push(redirect);
  //     }
  //   }, [history, location, redirect]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required Email"),
    password: Yup.string()
      .required("Required Password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  return (
    <div className="site-main">
      <div className="page-title background-page">
        <div className="container">
          <h1>Login</h1>
          <div class="breadcrumbs">
            <ul style={{ marginLeft: "-2.5em" }}>
              <li>
                <Link to="/">Home</Link>
                <span>/</span>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-content">
          <div className="form-login">
            <h2>Log in with your account</h2>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values);
                // dispatch(onLogin(values.email, values.password, history));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  id="loginForm"
                  className="clearfix"
                  autocomplete="off"
                >
                  <div class="field">
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                      required=""
                    />
                    <ErrorValidation
                      touched={touched.email}
                      message={errors.email}
                    />
                  </div>
                  <div class="field">
                    <input
                      type={show ? "password" : "text"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={values.password}
                      required=""
                    />
                    <ErrorValidation
                      touched={touched.password}
                      message={errors.password}
                    />
                  </div>
                  <div className="inline clearfix">
                    <Link to="/">
                      <button
                        type="submit"
                        value="Send Messager"
                        className="btn-primary"
                      >
                        Login
                      </button>
                    </Link>
                    <p style={{ marginTop: "-3rem" }}>
                      <Link to="/reset">Forgot your password?</Link>
                    </p>
                    <br />
                  </div>
                  <div className="inline clearfix">
                    <center>
                      <p style={{ float: "none" }}>
                        Not a member yet?{" "}
                        <Link
                          to={
                            redirect
                              ? `/register?redirect=${redirect}`
                              : "/register"
                          }
                        >
                          Register Now
                        </Link>
                      </p>
                    </center>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
