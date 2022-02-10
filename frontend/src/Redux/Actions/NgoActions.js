import { toast } from 'react-toastify';
import {
  ADD_NGO,
  ADD_NGO_FAIL,
  GET_ALL_NGOS,
  GET_NGO,
  GET_NGO_PROJECT,
  UPDATE_NGO_BY_ID,
} from '../constTypes';
import NgoServices from '../Services/NgoServices';

export const createNGOAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.createNGO(body)
        .then(res => {
          //need to add toaster here
          history.push('/view_all_ngo');
        })
        .catch(e => {
          // alert(e.response.data.message);
        });
    };
  } else {
    //need to add toaster here
  }
};

export const getAllNGOAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.GetAllNgoList()
        .then(res => {
          dispatch(GetAllNGO(res.data.data));
        })
        .catch(e => {
          alert(e.response.data.message);
        });
    };
  } else {
    alert('No network');
  }
};

export const getNgoProjectAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.getNgoProjectList(id)
        .then(res => {
          console.log('shivani', res.data);
          dispatch(getNgoProject(res.data));
        })
        .catch(e => {});
    };
  } else {
    alert('No network');
  }
};

export const getNgoProject = data => {
  return {
    type: GET_NGO_PROJECT,
    payload: data,
  };
};

export const getNgoByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.getNgoById(id)
        .then(res => {
          dispatch(getNgoById(res.data.data));
        })
        .catch(e => {
          alert(e.response.request.statusText);
        });
    };
  } else {
    alert('No network');
  }
};

export const getNgoById = data => {
  return {
    type: GET_NGO,
    payload: data,
  };
};

export const getAllNGOByValueAction = value => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.getAllNGOListByValue(value)
        .then(res => {
          //need to add toster here
          dispatch(GetAllNGO(res.data.data));
        })
        .catch(e => {
          alert(e.response.data.message);
        });
    };
  } else {
    //need to add toster here
  }
};

export const GetAllNGO = data => {
  return {
    type: GET_ALL_NGOS,
    payload: data,
  };
};

// update ngo
export const updateNgoAction = (id, data, history) => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.updateNgoById(id, data)
        .then(res => {
          dispatch(UpdateNgoByIdData(res.data.data));
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          // setTimeout(function () {
          dispatch(getAllNGOAction());
          // }, 2000);
        })
        .catch(e => {
          // alert(e.response.data.message)
          window.history.back();
        });
    };
  } else {
    // need to add toster here
  }
};

export const UpdateNgoByIdData = data => {
  return {
    type: UPDATE_NGO_BY_ID,
    payload: data,
  };
};
//delete Ngo
export const DeleteNgoByIdAction = id => {
  return dispatch => {
    NgoServices.deleteNgo(id)
      .then(res => {
        toast.success('User Deleted', {
          position: 'top-center',
          autoClose: 3000,
        });
        dispatch(getAllNGOAction());
      })
      .catch(e => {
        alert(e.response.data.message);
      });
  };
};
