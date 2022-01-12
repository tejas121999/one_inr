import {
  GET_PROFILE,
  GET_ROLL_LIST,
  GET_USER_LIST,
  GET_REZORPAY,
} from '../constTypes';
import SettingsServices from '../Services/SettingsServices';
import { toast } from 'react-toastify';

// get profile
export const getAllProfileAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getProfile()
        .then(res => {
          dispatch(getAllProfiles(res.data.data));
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
export const updateProfileAction = (data, history) => {
  if (navigator.onLine) {
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
        .catch(err => {
          window.history.back();
        });
    };
  } else {
    // need to add toster here
  }
};
// update profie image
export const updateProfileImgAction = (data, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.updateProfileImg(data)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {
          window.history.back();
        });
    };
  } else {
    // need to add toster here
  }
};

// change password
export const changePassword = (data, history) => {
  return dispatch => {
    SettingsServices.changePassword(data)
      .then(res => {
        toast.success(res.data.messgae, {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(function () {
          history.push('/my_Profile');
        }, 1000);
      })
      .catch(err => {
        window.history.back();
      });
  };
};

// role list
// get roll list
export const getRoleListActionAction = () => {
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
export const addRollListAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.addRoleList(body)
        .then(res => {
          //need to add toster here

          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

// update role
export const editRollListAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.editRollList(body)
        .then(res => {
          //need to add toster here

          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

// Delete role
export const DeleteRoleAction = id => {
  return dispatch => {
    SettingsServices.deleteRole(id)
      .then(res => {
        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        dispatch(getAllProfileAction(''));
      })
      .catch(err => {});
  };
};

// user list
// get all user
export const getUserListAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getUserList()
        .then(res => {
          dispatch(getUserLists(res.data));
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

export const getUserLists = data => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

// add user
export const addUserListAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.addUserList(body)
        .then(res => {
          // need to add toster here

          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 1000);
        })
        .catch(err => {});
    };
  } else {
    alert('no network');
  }
};

// update user
export const updateUserListAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.updateUserList(body)
        .then(res => {
          // need to add toster here

          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {});
    };
  } else {
    alert('no network');
  }
};

// delete user
export const DeleteUserACtion = id => {
  return dispatch => {
    SettingsServices.deleteUser(id)
      .then(res => {
        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        dispatch(getUserListAction(''));
      })
      .catch(err => {});
  };
};

// config
// update config
export const updateConfigAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.updateConfig(body)
        .then(res => {
          // need to add toster here
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {});
    };
  } else {
    alert('no network');
  }
};

// RAZORPAY CREDENTIALS
// GET REZORPAY
export const getRezorpayAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getAllRazorpay()
        .then(res => {
          dispatch(getRezorpay(res.data));
        })
        .catch(err => {});
    };
  } else {
    alert('No Network');
  }
};

export const getRezorpay = data => {
  return {
    type: GET_REZORPAY,
    payload: data,
  };
};

// add rezorpay
export const addRezorpayAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.addRezorpay(body)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {});
    };
  } else {
    alert('no network');
  }
};

// update rezorpay
export const updateRezorpayAction = (id, body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.updateRezorpay(id, body)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {
          window.history.back();
        });
    };
  } else {
    // need to add toster here
  }
};

// delete rezorpay
export const deleteRezorpayAction = id => {
  return dispatch => {
    SettingsServices.deleteRezorpay(id).then(res => {
      toast.success(res.data.message, {
        position: 'top-center',
        autoClose: 2000,
      });
      dispatch(err => {});
    });
  };
};
