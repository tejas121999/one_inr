import {ADD_NGO, ADD_NGO_FAIL, GET_ALL_NGOS} from '../constTypes';
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
  }

  export const getAllNGOAction = () => {
    if (navigator.onLine) {
      return dispatch => {
        NgoServices.getAllNGOList()
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


  //edit ngo
  export const UpdateNgoAction = (body, id, history) => {
    if (navigator.onLine) {
      return dispatch => {
        NgoServices.updateNgo(body, id)
          .then(res => {
            //need to add toster here
  
            // toast.success(res.data.message, {
            //   position: 'top-center',
            //   autoClose: 2000,
            // });
            setTimeout(function () {
              history.push('/view_all_ngo');
            }, 2000);
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