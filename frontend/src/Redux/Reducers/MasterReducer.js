import {
  GET_ALL_PARTNERS,
  GET_ALL_VENDORS,
  GET_PARTNER_BY_ID,
  GET_VENDOR_BY_ID,
} from '../constTypes';

const initialState = {
  vendorList: [],
  partnerList: [],
  vendorData: [],
  partnerData: [],
  isVendorTrue: false,
  isPartnerTrue: false,
};

export const masterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VENDORS: {
      return {
        ...state,
        vendorList: action.payload,
        isVendorTrue: false,
      };
    }
    case GET_ALL_PARTNERS: {
      return {
        ...state,
        partnerList: action.payload,
        isPartnerTrue: false,
      };
    }
    case GET_VENDOR_BY_ID: {
      return {
        ...state,
        vendorData: action.payload,
        isVendorTrue: true,
      };
    }
    case GET_PARTNER_BY_ID: {
      return {
        ...state,
        partnerData: action.payload,
        isPartnerTrue: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
