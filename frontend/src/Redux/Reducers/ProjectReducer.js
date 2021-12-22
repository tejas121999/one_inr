import {
  GET_ALL_PROJECTS,
  GET_PROJECT_BY_ID,
  GET_COMPLETED_PROJECTS,
  GET_ARCHIVED_PROJECTS,
} from '../constTypes';

const initialState = {
  projectList: [],
  projectDetails: [],
  completedProjectList: [],
  archivedProjectList: [],
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
    case GET_COMPLETED_PROJECTS: {
      return {
        ...state,
        completedProjectList: action.payload,
      };
    }
    case GET_ARCHIVED_PROJECTS: {
      return {
        ...state,
        archivedProjectList: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
