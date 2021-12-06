import {
  GET_ALL_PARTNERS,
  GET_ALL_VENDORS,
  GET_VENDOR_BY_ID,
} from '../constTypes';

const initialState = {
  vendorList: [],
  partnerList: [],
  vendorData: [],
  isVendorTrue: false,
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
    case GET_VENDOR_BY_ID: {
      return {
        ...state,
        vendorData: action.payload,
        isVendorTrue: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
