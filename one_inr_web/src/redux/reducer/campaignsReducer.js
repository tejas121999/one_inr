import { GET_ALL_CAMPAIGNS, GET_CAMPAIGNS_BY_Id } from "../ConsteType";

const initialState = {
    getAllCamp: [],
    getCampById: []
}

export const campaignsReducer = (state = initialState, action) => {
    switch (action.type) {
        // get all camp
        case GET_ALL_CAMPAIGNS: {
            return {
                ...state,
                getAllCamp: action.payload
            }
        }

        // get campaigns by id
        case GET_CAMPAIGNS_BY_Id: {
            return {
                ...state,
                getCampById: action.payload
            }
        }
    }
}