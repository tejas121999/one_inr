import { GET_ALL_NGOS, GET_NGO } from '../constTypes'

const initialState = {
    ngoList: [],
    ngoData: [],
};

export const ngoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_NGOS: {
            return {
                ...state,
                ngoList: action.payload,
            };
        }

        case GET_NGO: {
            return {
                ...state,
                ngoData: action.payload,
            };
        }

        default: {
            return {
                ...state
            }
        }
    }
}