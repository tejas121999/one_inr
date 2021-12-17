import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import logo from '../../assets/img/logo/logo_200.png';
import '../login.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import OtpInput from 'react-otp-input';
import { SubmitOTP } from '../../Redux/Actions/authAction';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OTPScreen = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [otp, setotp] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(props.location.state.email);
  }, []);

  const onsubmitOTP = e => {
    e.preventDefault();
    const obj = {
      email: email,
      otp: otp,
    };
    console.log('SUbmit', obj);
    dispatch(SubmitOTP(obj, props.history));
  };

  const handleChange = otpValue => setotp(otpValue);
  console.log('values2', props.location.state.email);
  return (
    <div className="loginbg">
      <ToastContainer hideProgressBar />
      <Formik>
        <Form className="login">
          <div
            style={{ marginBottom: '20px' }}
            className="logoimgdiv text-center"
          >
            <img src={logo} alt="logo" title="logo" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <OtpInput
              inputStyle="inputStyleBox"
              value={otp}
              onChange={handleChange}
              numInputs={4}
              separator={<span>-</span>}
            />
          </div>
          <div className="btn-row">
            <Link to="/" className="btn btn-danger w-45 mt-2">
              Cancel
            </Link>
            <button
              type="button"
              disabled={otp.length < 4}
              className="btn btn-primary w-45 mt-2"
              onClick={e => onsubmitOTP(e)}
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default OTPScreen;
