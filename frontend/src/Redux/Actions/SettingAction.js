import {
  GET_PROFILE,
  GET_ROLL_LIST,
  GET_USER_LIST,
  GET_REZORPAY,
  Update_User_By_Id,
  Update_User_By_Id_FAIL,
  GET_USER_LIST_FAIL,
  DELETE_USER_BY_ID,
  DELETE_USER_BY_ID_FAIL,
  Get_User_By_Id_FAIL,
  Get_User_By_Id,
  ADD_USER,
  ADD_USER_FAIL,
  GET_CONFIG,
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
        .catch(err => { });
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
          // window.history.back();
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
          // window.history.back();
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
          // history.push('/my_Profile');
        }, 1000);
      })
      .catch(err => {
        // window.history.back();
      });
  };
};

// role list
// get roll list
export const getRoleListAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getRoleList()
        .then(res => {
          dispatch(getAllRoleList(res.data.data));
        })
        .catch(err => { });
    };
  } else {
    alert('No network');
  }
};

export const getRoleListByValueAction = value => {
  return dispatch => {
    SettingsServices.getRoleListByValue(value)
      .then(res => {
        dispatch(getAllRoleList(res.data.data));
      })
      .catch(err => { });
  };
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
        .catch(err => { });
    };
  } else {
    alert('No network');
  }
};

//update role
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
        .catch(err => { });
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
      .catch(err => { });
  };
};

// user list
// get all user
export const getUserListAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getUserList()
        .then(res => {
          dispatch(getUserLists(res.data.data));
        })
        .catch(err => { });
    };
  } else {
    alert('No network');
  }
};

export const getUserListByValueAction = value => {
  return dispatch => {
    SettingsServices.getUserListByValue(value)
      .then(res => {
        dispatch(getUserLists(res.data.data));
      })
      .catch(err => { });
  };
};

export const getUserLists = data => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const getUserListsFail = data => {
  return {
    type: GET_USER_LIST_FAIL,
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
        .catch(err => { });
    };
  } else {
    alert('no network');
  }
};

export const addUser = data => {
  return {
    type: ADD_USER,
    payload: data,
  };
};

export const addUserFail = data => {
  return {
    type: ADD_USER_FAIL,
    payload: data,
  };
};

// Get_User_By_Id
export const GetUserByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.GetUserById(id)
        .then(res => {
          dispatch(GetUserByIdData(res.data.data));
          //need to add toster here
        })
        .catch(err => {
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const GetUserByIdData = data => {
  return {
    type: Get_User_By_Id,
    payload: data,
  };
};

export const onGetUserByIdDataFail = data => {
  return {
    type: Get_User_By_Id_FAIL,
    payload: data,
  };
};

// update user by id
export const updateUserByIdAction = (id, data) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.updateUserById(id, data)
        .then(res => {
          dispatch(UpdateUserByIdData(res.data.data));
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            window.history.back();
          }, 2000);
        })
        .catch(err => {
          window.history.back();
          //need to add toster here
        });
    };
  } else {
    alert('no network');
  }
};

export const UpdateUserByIdData = data => {
  return {
    type: Update_User_By_Id,
    payload: data,
  };
};

export const onUpdateUserByIdDataFail = data => {
  return {
    type: Update_User_By_Id_FAIL,
    payload: data,
  };
};

// delete user by id
export const DeleteUserByIdACtion = id => {
  return dispatch => {
    SettingsServices.deleteUserById(id)
      .then(res => {
        toast.success('User Deleted', {
          position: 'top-center',
          autoClose: 3000,
        });
        dispatch(getUserListAction());
      })
      .catch(err => { });
  };
};

export const DeleteUserByIdData = data => {
  return {
    type: DELETE_USER_BY_ID,
    payload: data,
  };
};

export const onDeleteUserByIdDataFail = data => {
  return {
    type: DELETE_USER_BY_ID_FAIL,
    payload: data,
  };
};

// config
export const getConfigAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.getConfig()
        .then(res => {
          dispatch(getConfig(res.data));
        })
        .catch(err => { })
    }
  } else {
    alert('no network')
  }
}

export const getConfig = data => {
  return {
    type: GET_CONFIG,
    payload: data
  }
}



// update config
export const updateConfigAction = (body) => {
  if (navigator.onLine) {
    return dispatch => {
      SettingsServices.updateConfig(body)
        .then(res => {
          // need to add toster here
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
        })
        .catch(err => { });
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
        .catch(err => { });
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
        .catch(err => { });
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
      dispatch(err => { });
    });
  };
};
