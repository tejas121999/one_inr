import { GET_PROFILE } from '../constTypes';
import SettingsServices from '../Services/SettingsServices';
import { toast } from 'react-toastify';

// get profile
export const getProfile = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getProfile()
        .then(res => {
          dispatch(getAllProfiles(res.data));
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

export const getAllProfiles = data => {
  return {
    type: GET_PROFILE,
    payload: data,
  };
};

// update profile
export const updateProfile = (id, data, history) => {
  return dispatch => {
    SettingsServices.updateProfile(id, data)
      .then(res => {
        toast.success(res.data.messgae, {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(function () {
          history.push('#');
        }, 2000);
      })
      .catch(err => {});
  };
};

// change password
export const changePassword = (id, data, history) => {
  return dispatch => {
    SettingsServices.changePassword(id, data).then(res => {
      toast.success(res.data.messgae, {
        position: 'top-center',
        autoClose: 2000,
      });
      setTimeout(function () {
        history.push('#');
      }, 2000);
    });
  };
};
