import { GET_ALL_PARTNERS, GET_ALL_VENDORS } from '../constTypes';

const initialState = {
  vendorList: [],
  partnerList: [],
};

export const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VENDORS: {
      return {
        ...state,
        vendorList: action.payload,
      };
    }
    case GET_ALL_PARTNERS: {
      return {
        ...state,
        partnerList: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
