import { GET_PROFILE, GET_ROLL_LIST } from "../constTypes";
import SettingsServices from "../Services/SettingsServices";
import { toast } from 'react-toastify';

// get profile
export const getProfile = () => {
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
};

export const getAllProfiles = data => {
    return {
        type: GET_PROFILE,
        payload: data
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
            .catch(err => { });
    }
}

// change password
export const changePassword = (id, data, history) => {
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
    }
}

// get roll list 
export const getRoleList = () => {
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
        payload: data
    };
};

// add roll
export const addRollList = () => {
    if (navigator.onLine) {
        return dispatch => {
            SettingsServices
                .addRoleList(body)
                .then(res => {
                    console.log(res)
                })
                .catch(err => { });
        }
    } else {
        alert('No network');
    }
}

// update role
export const updatList = () => {
    if (navigator.onLine) {
        return dispatch => {
            SettingsServices
                .editRollList(body)
                .then(res => {
                    console.log(res)
                })
                .catch(err => { });
        }
    } else {
        alert('No network');
    }
}
