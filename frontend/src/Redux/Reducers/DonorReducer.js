import { GET_PARENT_LIST } from '../constTypes';

const initialState = {
  allParent: [],
  isLoadding: false,
};

export const DonorReducer = (state = initialState, action) => {
  console.log('Called');
  switch (action.type) {
    case GET_PARENT_LIST: {
      return {
        ...state,
        allParent: action.payload,
        isLoadding: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
