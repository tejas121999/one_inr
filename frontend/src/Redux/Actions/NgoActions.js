import {ADD_NGO, ADD_NGO_FAIL} from '../constTypes';
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