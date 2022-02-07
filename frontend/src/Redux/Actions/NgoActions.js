import { toast } from 'react-toastify';
import { ADD_NGO, ADD_NGO_FAIL, GET_ALL_NGOS, GET_NGO } from '../constTypes';
import NgoServices from '../Services/NgoServices';

export const createNGOAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.createNGO(body)
        .then(res => {
          //need to add toaster here
          history.push('/view_all_ngo');
        })
        .catch(err => {
          //need to add toaster here
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
        .catch(err => {});
    };
  } else {
    alert('No network');
  }
};

export const getNgoByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.getNgoById(id)
        .then(res => {
          dispatch(getNgoById(res.data.data));
          console.log('abc', res);
        })
        .catch(err => {});
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
        .catch(err => {
          //need to add toster here
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
export const updateNgoAction = (body, id, history) => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.updateNgo(body, id)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('/view_all_ngo');
          }, 2000);
        })
        .catch(err => {
          toast.error('something went wrong', {
            position: 'top-center',
            autoClose: 2000,
          });
        });
    };
  } else {
    // need to add toster here
  }
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
      .catch(err => {});
  };
};
