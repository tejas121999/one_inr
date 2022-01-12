import { toast } from 'react-toastify';
import { ADD_NGO, ADD_NGO_FAIL, GET_ALL_NGOS } from '../constTypes';
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

export const getAllNGOAction = value => {
  if (navigator.onLine) {
    return dispatch => {
      NgoServices.getAllNGOList(value)
        .then(res => {
          //need to add toster here
          dispatch(GetAllNGO(res.data.result));
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
      NgoServices.updateNgo(id, body)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000
          });
          setTimeout(function () {
            history.push('#')
          }, 2000)
        })
        .catch(err => {
          window.history.back()
        })
    }
  } else {
    // need to add toster here
  }
}