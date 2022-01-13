import { GET_MY_PROFILE, GET_ALL_BACK_CAMPAIGNS, GET_BACK_CAMPAIGNS_BY_ID } from "../ConsteType";
import profileServices from "../services/profileServices";
import { toast } from "react-toastify";

// get my profile
export const getMyProfileACtion = () => {
    return dispatch => {
        profileServices.getMyProfile()
            .then(res => {
                dispatch(getMyProfiles(res.data));
            })
            .catch(err => { })
    }
}

export const getMyProfiles = data => {
    return {
        type: GET_MY_PROFILE,
        payloade: data
    }
}

// update my profile
export const updateMyProfileAction = (data, history) => {
    profileServices.updateMyProfile(data)
        .then(res => {
            toast.success(res.data.message, {
                position: 'top-center',
                autoClose: 2000
            });
            setTimeout(function () {
                history.push('#')
            }, 2000)
        })
        .catch(err => {
            window.history.back();
        })
}

// change password
export const changePasswordAction = (data, history) => {
    profileServices.changePassword(data)
        .then(res => {
            toast.success(res.data.message, {
                position: 'top-center',
                autoClose: 2000
            });
            setTimeout(function () {
                history.push('#')
            }, 2000)
        })
        .catch(err => {
            window.history.back()
        })
}

// back campaigns
export const getAllBackCampaignsAction = () => {
    return dispatch => {
        profileServices.getAllBackCampaigns()
            .then(res => {
                dispatch(getAllBackCamp(res.data))
            })
            .catch(err => { })
    }
}

export const getAllBackCamp = data => {
    return {
        type: GET_ALL_BACK_CAMPAIGNS,
        payloade: data
    }
}

// get back campaigns by id
export const getBackCampaignsByidAction = (id) => {
    return dispatch => {
        profileServices.getBackCampaignsByid(id)
            .then(res => {
                dispatch(getBackCampById(res.data))
            })
            .catch(err => { })
    }

}

export const getBackCampById = data => {
    return {
        type: GET_BACK_CAMPAIGNS_BY_ID,
        payloade: data
    }
}

// wallet
// add money to wallet 
export const addMoneyToWalletAction = body => {
    profileServices.AddMoneyToWallet(body)
        .then(res => {
            toast.success(res.data.message, {
                position: 'top-center',
                autoClose: 2000
            });
            setTimeout(function () {
                history.push('#')
            }, 2000)
        })
        .catch(err => {
            window.history.back()
        })
}

// change plane
export const changePlaneAction = body => {
    profileServices.changePassword(body)
        .then(res => {
            toast.success(res.data.message, {
                position: 'top-center',
                autoClose: 2000
            });
            setTimeout(function () {
                history.push('#')
            }, 2000)
        })
        .catch(err => {
            window.history.back()
        })
}