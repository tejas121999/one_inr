import { GET_ALL_PROJECTS, GET_PROJECT_BY_ID } from '../constTypes';

const initialState = {
  projectList: [],
  projectDetails: [],
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS: {
      return {
        ...state,
        projectList: action.payload,
      };
    }
    case GET_PROJECT_BY_ID: {
      return {
        ...state,
        projectDetails: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
