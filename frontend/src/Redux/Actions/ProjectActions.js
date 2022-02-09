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
          alert(res.data.message)
          dispatch(getAllProjects(res.data.result));
        })
        .catch(e => {
          alert(e.response.request.statusText)
        });
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
export const addProjectAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .createProject(body)
        .then(res => {
          alert(res.data.message)
          setTimeout(function () {
            history.push('/view_all_project')
          }, 2000);
        })
        .catch((e) => {
          alert(e.response.request.statusText)
        });
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
          alert(res.data.message)
          dispatch(getProjectData(res.data.result));
        })
        .catch(e => {
          alert(e.response.request.statusText)
        });
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
          alert(res.data.message)
          setTimeout(function () {
            history.push('#')
          }, 2000);
        })
        .catch(e => {
          alert(e.response.request.statusText)
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
          alert(res.data.message)
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(e => {
          alert(e.response.request.statusText)
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
          alert(res.data.message)
          setTimeout(function () {
            history.push('#')
          }, 2000);
        })
        .catch(e => {
          alert(e.response.request.statusText)
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
          alert(res.data.message)
          dispatch(getCompletedProjects(res.data));
        })
        .catch(e => {
          alert(e.response.request.statusText)
        });
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
        alert(res.data.message)
        dispatch(getCompletedProjects(res.data));
      })
      .catch(e => {
        alert(e.response.request.statusText)
      });
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
          alert(res.data.message)
          dispatch(getArchivedProjects(res.data));
        })
        .catch(e => {
          alert(e.response.request.statusText)
        });
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
