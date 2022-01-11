import { toast } from 'react-toastify';
import {
  GET_ALL_PROJECTS,
  GET_ARCHIVED_PROJECTS,
  GET_COMPLETED_PROJECTS,
  GET_PROJECT_BY_ID,
} from '../constTypes';
import projectServices from '../Services/projectServices';

// Get ALl

export const getAllProjectAction = (value) => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .getAllProject(value)
        .then(res => {
          // console.log("getAllProject", res.data.result)
          dispatch(getAllProjects(res.data.result));
        })
        .catch(err => { });
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
        .then(res => {
          console.log(res);
        })
        .catch(err => { });
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
          dispatch(getProjectData(res.data.result));
        })
        .catch(err => { });
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

// update project 
export const updateProjectAction = (id, data, history) => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices.updateProject(id, data)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000
          });
          setTimeout(function () {
            history.push('#')
          }, 2000);
        })
        .catch(err => {
          window.history.back();
        })
    }
  }
}

// commition update
export const CommitionUpdateAction = (id, data, history) => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices.updateCommition(id, data)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(err => {
          window.history.back();
        })
    }
  } else {
    // 
  }
}

// add fund by id
export const addFundAction = (id, data, history) => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices.addFund(id, data)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000
          });
          setTimeout(function () {
            history.push('#')
          }, 2000);
        })
        .catch(err => {
          window.history.back();
        })
    }
  }
}

// Copleted projects

export const getAllCompletedProjectAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .getAllCompletedProject()
        .then(res => {
          dispatch(getCompletedProjects(res.data));
        })
        .catch(err => { });
    };
  } else {
    alert('No network');
  }
};

export const getCompletedProjectByValueAction = value => {
  return dispatch => {
    projectServices
      .getCompletedProjectByValue(value)
      .then(res => {
        dispatch(getCompletedProjects(res.data));
      })
      .catch(err => { });
  };
};

export const getCompletedProjects = data => {
  return {
    type: GET_COMPLETED_PROJECTS,
    payload: data,
  };
};

// Archived Projects

export const getAllArchivedProjectAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .getAllArchivedProject()
        .then(res => {
          dispatch(getArchivedProjects(res.data));
        })
        .catch(err => { });
    };
  } else {
    alert('No network');
  }
};

export const getArchivedProjects = data => {
  return {
    type: GET_ARCHIVED_PROJECTS,
    payload: data,
  };
};
