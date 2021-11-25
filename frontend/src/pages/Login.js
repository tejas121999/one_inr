import React from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import logo from '../assets/img/logo/logo_200.png';
import './login.css';
import { NavLink, useHistory } from 'react-router-dom';
import { BASE_URL, LOGIN } from '../API/APIEndpoints';
import axios from 'axios';

let validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('The email address you gave was incorrect')
    .required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(4, 'Password is too short - should be 4 chars min.')
    .max(16, 'Password is long - should be 16 chars max.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = () => {
  let history = useHistory();

  const loginHandler = async values => {
    const URL = BASE_URL + LOGIN;
    await axios
      .post(URL, values)
      .then(response => {
        console.log('response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  return (
    <div className="container loginbg">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          loginHandler(values);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form className="">
            <div className="logoimgdiv text-center">
              <img src={logo} alt="logo" title="logo" />
            </div>

            {/* email */}
            <div className="form-group w-75 m-auto">
              <Field
                name="email"
                type="email"
                placeholder="enter email"
                className="form-control mt-3"
                autoComplete="off"
              />
              {touched.email && errors.email ? (
                <small className="text-danger ">{errors.email}</small>
              ) : null}
            </div>

            {/* password */}
            <div className="form-group w-75 m-auto">
              <Field
                name="password"
                type="password"
                placeholder="enter password"
                className="form-control mt-3"
              />
              {touched.password && errors.password ? (
                <small className="text-danger ">{errors.password}</small>
              ) : null}
            </div>

            <div className="text-right forgotPass">
              <NavLink to="/Forgot">Forgot Password ?</NavLink>
            </div>
            <div className="form-group w-75 m-auto">
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
