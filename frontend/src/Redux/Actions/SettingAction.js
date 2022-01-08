import { GET_PROFILE, GET_ROLL_LIST, GET_USER_LIST } from "../constTypes";
import SettingsServices from "../Services/SettingsServices";
import { toast } from 'react-toastify';

// get profile
export const getProfileAction = () => {
    if (navigator.onLine) {
        return dispatch => {
            SettingsServices
                .getProfile()
                .then(res => {
                    dispatch(getAllProfiles(res.data));
                })
                .catch(err => { });
        }
    } else {
        alert('No network');
    };
  } 


export const getAllProfiles = data => {
  return {
    type: GET_PROFILE,
    payload: data,
  };
};

// update profile
export const updateProfileAction = (id, data, history) => {
    if (navigator.onLine) {
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
                .catch(err => {
                    window.history.back();
                });
        }
    } else {
        // need to add toster here
    }
}



// change password
export const changePasswordAction = (id, data, history) => {
    return dispatch => {
        SettingsServices.changePassword(id, data)
            .then(res => {
                toast.success(res.data.messgae, {
                    position: 'top-center',
                    autoClose: 2000,
                });
                setTimeout(function () {
                    history.push('#');
                }, 2000);
            })
            .catch(err => {
                window.history.back()
            })
    }
}

// role list 
// get roll list 
export const getRoleListActionAction = () => {
    if (navigator.onLine) {
        return dispatch => {
            SettingsServices
                .getRoleList()
                .then(res => {
                    dispatch(getAllRoleList(res.data));
                })
                .catch(err => { });
        }
    } else {
        alert('No network');
    }
}

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
        }
    } else {
        alert('No network');
    }
}

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
                .catch(err => { });
        }
    } else {
        alert('No network');
    }
}

// Delete role
export const DeleteRoleAction = id => {
    return dispatch => {
        SettingsServices.deleteRole(id)
            .then(res => {
                toast.success(res.data.message, {
                    position: 'top-center',
                    autoClose: 2000,
                });
                dispatch(getProfileAction(''))
            })
            .catch(err => { })
    }
}

// user list
// get all user
export const getUserListAction = () => {
    if (navigator.onLine) {
        return dispatch => {
            SettingsServices.getUserList()
                .then(res => {
                    dispatch(getUserLists(res.data));
                })
                .catch(err => { })
        }
    } else {
        alert('No network');
    }
}

export const getUserLists = data => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

// add user
export const addUserListAction = (body, history) => {
    if (navigator.onLine) {
        return dispatch => {
            SettingsServices.addUserList(body)
                .then(res => {
                    // need to add toster here

                    toast.success(res.data.message, {
                        position: 'top-center',
                        autoClose: 2000
                    });
                    setTimeout(function () {
                        history.push('#')
                    }, 2000)
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

// update role
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
                        history.push('#')
                    }, 2000);
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

// delete role
export const DeleteUserACtion = id => {
    return dispatch => {
        SettingsServices.deleteUser(id)
            .then(res => {
                toast.success(res.data.message, {
                    position: 'top-center',
                    autoClose: 2000,
                });
                dispatch(getUserListAction(''))
            })
            .catch(err => { })
    }
}

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
                        history.push('#')
                    }, 2000);
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

