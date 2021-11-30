import axios from 'axios';
import { BASE_URL, LOGIN_URL } from '../../API/APIEndpoints';
import { LOGIN_FAILED, LOGIN } from '../constTypes';

export const loginAdmin = (body, history) => {
  return dispatch => {
    const URL = BASE_URL + LOGIN_URL;
    axios
      .post(URL, body)
      .then(response => {
        console.log('response', response.data);
        localStorage.setItem('Token', response.data.Token);
        dispatch(getLoggedInUser(response.data));
        history.push('/dashboard');

        // window.location.reload();
      })
      .catch(error => {
        dispatch(onLoginFailed(error));
        console.log('error', error);
      });
  };
};

export const getLoggedInUser = data => {
  console.log('reducer call', data);
  return {
    type: LOGIN,
    payload: data,
  };
};

export const onLoginFailed = data => {
  return {
    type: LOGIN_FAILED,
    payload: data,
  };
};
