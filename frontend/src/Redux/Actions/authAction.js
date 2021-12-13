import { LoginAuth, LoginAuthFail } from '../constTypes';
import DonorServices from '../Services/DonorServices';
import { toast } from 'react-toastify';

// 1.Login

export const LoginAdmin = (data, history) => {
  return dispatch => {
    DonorServices.LoginAuth(data)
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
