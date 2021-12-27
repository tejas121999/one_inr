import React, { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import logo from '../assets/img/logo/logo_200.png';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RequestOTP } from '../Redux/Actions/authAction';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email Format').required(),
});

const Forgot = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = values => {
    console.log('valuesFor', values);
    if (values) {
      dispatch(RequestOTP(values, props.history));
    }
  };

  return (
    <div className="loginbg">
      <ToastContainer hideProgressBar />
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          loginHandler(values);
          // console.log('values', values);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form className="login">
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

            <div className="form-group w-75 m-auto mt-3">
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Submit
              </button>
              {/* <Link to="/otp" className="btn btn-danger w-100 mt-2">
                OTP
              </Link> */}
            </div>
            <div className="form-group w-75 m-auto mt-3">
              <Link to="/" className="btn btn-danger w-100 mt-2">
                Back
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forgot;
