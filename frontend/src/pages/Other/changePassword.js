import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import logo from '../../assets/img/logo/logo_200.png';
import '../login.css';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequestChange } from '../../Redux/Actions/authAction';

const ChangePassword = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [isPasswordVisble, setIsPasswordVisble] = useState(false);

  const onSubmit = values => {
    const obj = {
      email: props.location.state.email,
      password: values.password,
      otp: props.location.state.otp,
    };

    if (values) {
      dispatch(RequestChange(obj, props.history));
    }
  };

  let initialValues = { password: '', confirmPassword: '' };
  const validatePassword = value => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.length < 4) {
      error = 'Password is too short - should be 4 chars min.';
    } else if (value.length > 16) {
      error = 'Password is long - should be 16 chars max.';
    } else {
      setPassword(value);
    }
    // }
    return error;
  };
  const validateConfirmPsd = value => {
    console.log('Chinmay', password);
    let error;
    if (!value) {
      error = 'Required';
    } else if (value !== password) {
      error = 'Both password and confirm password should be same';
    }
    // }
    return error;
  };
  console.log('Props', props);
  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="loginbg">
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            onSubmit(values);
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
                  name="password"
                  type="password"
                  placeholder="Enter New Password"
                  className="form-control mt-3"
                  autoComplete="off"
                  validate={validatePassword}
                />
                {touched.password && errors.password ? (
                  <small className="text-danger ">{errors.password}</small>
                ) : null}
              </div>

              {/* password */}
              <div className="form-group w-75 m-auto">
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control mt-3"
                  autoComplete="off"
                  validate={validateConfirmPsd}
                  disabled={values.password.length > 0 ? '' : 'disabled'}
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <small className="text-danger ">
                    {errors.confirmPassword}
                  </small>
                ) : null}
              </div>
              <div className="form-group w-75 m-auto">
                <button type="submit" className="btn btn-primary w-100 mt-2">
                  Submit
                </button>
              </div>
              <div className="form-group w-75 m-auto mt-3">
                <Link to="/" className="btn btn-danger w-100 mt-2">
                  Cancel
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ChangePassword;
