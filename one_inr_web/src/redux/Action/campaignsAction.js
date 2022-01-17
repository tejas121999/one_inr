import { GET_ALL_CAMPAIGNS, GET_CAMPAIGNS_BY_Id } from "../ConsteType";
import campaignsServices from '../services/campaignsServices'

// get all profile
export const getAllProfileAction = () => {
    return dispatch => {
        campaignsServices.getAllCAmpaigns()
            .then(res => {
                dispatch(getAllPRofiles(res.data))
            })
            .catch(err => { })
    }
}

export const getAllPRofiles = data => {
    return {
        type: GET_ALL_CAMPAIGNS,
        payload: data
    }
}

// get camping by id
export const getCampingByIdAction = (id) => {
    return dispatch => {
        campaignsServices.getCampaignsById(id)
            .then(res => {
                dispatch(getCampById(res.data))
            })
            .catch(err => { })
    }
}

export const getCampById = data => {
    return {
        type: GET_CAMPAIGNS_BY_Id,
        payload: data
    }
}
