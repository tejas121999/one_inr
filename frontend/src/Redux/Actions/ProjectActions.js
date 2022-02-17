import cogoToast from 'cogo-toast';
import { toast } from 'react-toastify';
import {
  GET_ALL_PROJECTS,
  GET_ARCHIVED_PROJECTS,
  GET_COMPLETED_PROJECTS,
  GET_PROJECT_BY_ID,
} from '../constTypes';
import projectServices from '../Services/projectServices';

// Get ALl

export const getAllProjectAction = value => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .getAllProject(value)
        .then(res => {
          dispatch(getAllProjects(res.data.result));
        })
        .catch(e => {
          alert(e.response.data.message);
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
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          // cogoToast.success(res.data.message)
          setTimeout(function () {
            history.push('/view_all_project');
          }, 2000);
        })
        .catch(e => {
          // console.log(e.response.data.message)
          toast.error(e.response.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
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
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          dispatch(getProjectData(res.data.result));
        })
        .catch(e => {
          toast.error(e.response.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
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
      projectServices
        .updateProject(id, data)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(e => {
          toast.error(e.response.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
        });
    };
  }
};

// commition update
export const CommitionUpdateAction = (id, data, history) => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .updateCommition(id, data)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(e => {
          toast.error(e.response.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
        });
    };
  } else {
    //
  }
};

// add fund by id
export const addFundAction = (id, data, history) => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .addFund(id, data)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('#');
          }, 2000);
        })
        .catch(e => {
          toast.error(e.response.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
        });
    };
  }
};

// Copleted projects

export const getAllCompletedProjectAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      projectServices
        .getAllCompletedProject()
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          dispatch(getCompletedProjects(res.data));
        })
        .catch(e => {
          toast.error(e.response.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
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
        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        dispatch(getCompletedProjects(res.data));
      })
      .catch(e => {
        toast.error(e.response.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
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
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          dispatch(getArchivedProjects(res.data));
        })
        .catch(e => {
          toast.error(e.response.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
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
