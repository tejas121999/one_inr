import { LoginAuth, LoginAuthFail } from '../constTypes';
import DonorServices from '../Services/DonorServices';

// 1.Login

export const LoginAdmin = (data, history) => {
  return dispatch => {
    DonorServices.LoginAuth(data)
      .then(res => {
        dispatch(LoginAuthData(res.data.result));
        localStorage.setItem('Token', res.data.Token);
        dispatch(LoginAuthData(res.data));
        history.push('/dashboard');
      })
      .catch(error => {
        history.push('/dashboard');
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
