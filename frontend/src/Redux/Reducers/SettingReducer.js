import { GET_PROFILE } from '../constTypes';

const initialState = {
  getProfile: [],
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
    default: {
      return {
        ...state,
      };
    }
  }
};
