import { GET_PROFILE, GET_ROLL_LIST, GET_USER_LIST } from "../constTypes";

const initialState = {
    getProfile: [],
    getRoleList: [],
    getUserList: []
};

export const SettingReducer = (state = initialState, action) => {
    switch (action.type) {
        // get profile
        case GET_PROFILE: {
            return {
                ...state,
                getProfile: action.payload,
            };
        }

        // get roll
        case GET_ROLL_LIST: {
            return {
                ...state,
                getRoleList: action.payload
            }
        }

        // GET user List
        case GET_USER_LIST: {
            return {
                ...state,
                getUserList: action.payload
            }
        }

        default: {
            return {
                ...state,
            };
        }
    }
}