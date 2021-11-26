import { LOGIN, LOGIN_FAILED } from '../constTypes';

const initialState = {
  user: {},
  error: '',
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  console.log('reducer', action.type);
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoggedIn: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoggedIn: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
