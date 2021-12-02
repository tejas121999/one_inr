import React, { useEffect } from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import logo from '../assets/img/logo/logo_200.png';
import './login.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginAdmin } from '../Redux/Actions/authAction';

let validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('The email address you gave was incorrect')
    .required(),
});

const Forgot = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = values => {
    console.log('values2', values);
    if (values) {
      dispatch(LoginAdmin(values, props.history));
    }
  };

  return (
    <div className="loginbg">
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

            <div className="text-right forgotPass mt-2 pr-5">
              <NavLink to="/forgot">Forgot Password ?</NavLink>
            </div>
            <div className="form-group w-75 m-auto">
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forgot;
