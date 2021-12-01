import { LoginAuth, LoginAuthFail } from '../constTypes';

// 1.Login

export const LoginAdmin = () => {
  return dispatch => {
    DonorServices.LoginAuth()
      .then(res => {
        dispatch(LoginAuthData(res.data.result));
        localStorage.setItem('Token', response.data.Token);
        dispatch(LoginAuthData(response.data));
        history.push('/dashboard');
      })
      .catch(error => dispatch(onLoginAuthFail(error)));
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
