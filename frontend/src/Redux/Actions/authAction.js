import { LoginAuth, LoginAuthFail } from '../constTypes';
import { toast } from 'react-toastify';
import authServices from '../Services/authServices';

// 1.Login

export const LoginAdmin = (data, history) => {
  return dispatch => {
    authServices
      .LoginAuth(data)
      .then(res => {
        dispatch(LoginAuthData(res.data.result));
        localStorage.setItem('Token', res.data.Token);
        dispatch(LoginAuthData(res.data));

        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        history.push('/dashboard');
      })
      .catch(error => {
        console.log('LOgin', error);
        toast.error('Wrong Credentials.', {
          position: 'top-center',
          autoClose: 4000,
        });
        // history.push('/dashboard');
      });
  };
};

export const LoginAuthData = data => {
  return {
    type: LoginAuth,
    payload: data,
  };
};

export const onLoginAuthFail = data => {
  return {
    type: LoginAuthFail,
    payload: data,
  };
};

// Forgot Password
export const RequestOTP = (data, history) => {
  return dispatch => {
    authServices
      .requestOtp(data)
      .then(res => {
        console.log('OTP', res);
        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(function () {
          history.push('/otp', data);
        }, 2000);
      })
      .catch(error => {
        console.log('OtpErr', error);
      });
  };
};

export const SubmitOTP = (data, history) => {
  return dispatch => {
    authServices
      .submitOtp(data)
      .then(res => {
        console.log('OTPSub', res);
        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(function () {
          history.push('/changePassword', data);
        }, 2000);
      })
      .catch(error => {
        console.log('OtpErr', error);
      });
  };
};

export const RequestChange = (data, history) => {
  return dispatch => {
    authServices
      .submitPassword(data)
      .then(res => {
        console.log('PAssword', res);
        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(function () {
          history.push('/');
        }, 2000);
      })
      .catch(error => {
        console.log('PAssworderr', error);
      });
  };
};
