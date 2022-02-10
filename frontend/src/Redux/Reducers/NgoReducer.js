import {
  GET_ALL_NGOS,
  GET_NGO,
  GET_NGO_PROJECT,
  UPDATE_NGO_BY_ID,
} from '../constTypes';

const initialState = {
  ngoList: [],
  ngoProjectList: [],
  ngoData: [],
  UpdateNgoById: [],
};

export const ngoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NGOS: {
      return {
        ...state,
        ngoList: action.payload,
      };
    }

    case GET_NGO_PROJECT: {
      return {
        ...state,
        ngoProjectList: action.payload,
      };
    }

    case GET_NGO: {
      return {
        ...state,
        ngoData: action.payload,
      };
    }

    case UPDATE_NGO_BY_ID: {
      return {
        ...state,
        UpdateNgoById: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
