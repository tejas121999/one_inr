import axios from 'axios';
import { ADD_DONOR_GET_PARENTS_URL, BASE_URL } from '../../API/APIEndpoints';
import { GET_PARENT_LIST } from '../constTypes';

export const getParentListAction = data => {
  return async dispatch => {
    const url = BASE_URL + ADD_DONOR_GET_PARENTS_URL;
    await axios
      .get(url)
      .then(res => {
        console.log('Response', res);
        dispatch(parentList(res.data.data));
      })
      .catch(err => {
        console.log('Error', err);
        dispatch(parentList(data));
      });
  };
};

const parentList = data => dispatch => {
  dispatch({
    type: GET_PARENT_LIST,
    payload: data,
  });
};
