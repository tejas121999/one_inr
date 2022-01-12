import { GET_PROFILE, GET_ROLL_LIST } from '../constTypes';
import SettingsServices from '../Services/SettingsServices';
import { toast } from 'react-toastify';

// get profile
export const getProfile = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getProfile()
        .then(res => {
          dispatch(getAllProfiles(res.data.data));
          console.log(res);
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
export const updateProfile = (data, history) => {
  return dispatch => {
    SettingsServices.updateProfile(data)
      .then(res => {
        toast.success(res.data.messgae, {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(function () {
          history.push('/my_profile');
        }, 1000);
      })
      .catch(err => {});
  };
};

// change password
export const changePassword = (data, history) => {
  return dispatch => {
    SettingsServices.changePassword(data).then(res => {
      toast.success(res.data.messgae, {
        position: 'top-center',
        autoClose: 2000,
      });
      setTimeout(function () {
        // history.push('/my_Profile');
      }, 1000);
    });
  };
};

// get roll list
export const getRoleList = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getRoleList()
        .then(res => {
          dispatch(getAllRoleList(res.data));
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

export const getAllRoleList = data => {
  return {
    type: GET_ROLL_LIST,
    payload: data,
  };
};

// add roll
export const addRollList = body => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.addRoleList(body)
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

// update role
export const updatList = body => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.editRollList(body)
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};
