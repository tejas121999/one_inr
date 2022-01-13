import { GET_MY_PROFILE, GET_ALL_BACK_CAMPAIGNS } from "../ConsteType";

const initialState = {
    getMyProfile: [],
    getAllBackCampaigns: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // get profile
        case GET_MY_PROFILE: {
            return {
                ...state,
                getMyProfile: action.payload
            }
        }

        // get all back campaigns
        case GET_ALL_BACK_CAMPAIGNS: {
            return {
                ...state,
                getAllBackCampaigns: action.payload
            }
        }
    }
}