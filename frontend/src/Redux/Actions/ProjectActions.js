import { GET_ALL_PROJECTS, GET_PROJECT_BY_ID } from '../constTypes';
import projectServices from '../Services/projectServices';

// Get ALl

export const getAllProjectAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .getAllProject()
        .then(res => {
          dispatch(getAllProjects(res.data));
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

export const getAllProjects = data => {
  return {
    type: GET_ALL_PROJECTS,
    payload: data,
  };
};

// CREate
export const addProjectAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .createProject(body)
        .then(res => {})
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

// Get by ID

export const getProjectByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .getProjectByID(id)
        .then(res => {
          dispatch(getProjectData(res.data));
        })
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

export const getProjectData = data => {
  return {
    type: GET_PROJECT_BY_ID,
    payload: data,
  };
};
