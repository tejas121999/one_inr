import React, { useEffect, useState } from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import logo from '../assets/img/logo/logo_200.png';
import './login.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginAdmin } from '../Redux/Actions/authAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('The email address you gave was incorrect')
    .required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(4, 'Password is too short - should be 4 chars min.')
    .max(16, 'Password is long - should be 16 chars max.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isPasswordVisble, setIsPasswordVisble] = useState(false);

  const loginHandler = values => {
    console.log('values2', values);
    if (values) {
      dispatch(LoginAdmin(values, props.history));
    }
  };

  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="loginbg">
        <Formik
          initialValues={{
            email: '',
            password: '',
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
                  placeholder="Enter email"
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
                  type={isPasswordVisble ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="p-2 mt-2 border-0 w-100 input-border psw-feild"
                />
                <i
                  className={`fa ${
                    isPasswordVisble ? 'fa-eye-slash' : 'fa-eye'
                  } `}
                  id="togglePassword"
                  style={{ marginLeft: '-30px', cursor: 'pointer' }}
                  onMouseDown={() =>
                    setIsPasswordVisble(isPasswordVisble ? false : true)
                  }
                ></i>
                {touched.password && errors.password ? (
                  <small className="text-danger ">{errors.password}</small>
                ) : null}
              </div>

              <div className="text-right forgotPass mt-2 pr-5">
                <NavLink to="/forgot_password">Forgot Password ?</NavLink>
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
    </>
  );
};

export default Login;
