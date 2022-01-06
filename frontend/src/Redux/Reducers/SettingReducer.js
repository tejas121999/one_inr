import { GET_PROFILE, GET_ROLL_LIST } from "../constTypes";

const initialState = {
    getProfile: [],
    getRoleList: []
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

        default: {
            return {
                ...state,
            };
        }
    }
}
