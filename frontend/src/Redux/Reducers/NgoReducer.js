import { GET_ALL_NGOS } from '../constTypes'

const initialState = {
    ngoList: [],
};

export const ngoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_NGOS: {
            return {
              ...state,
              ngoList: action.payload,
            };
        }
        default : {
            return {
                ...state
            }
        }
    }
}