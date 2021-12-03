import { GET_ALL_PARTNERS, GET_ALL_VENDORS } from '../constTypes';
import MasterServices from '../Services/MasterServices';

// getAll
export const getAllVEndorAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.GetAllVendorList()
        .then(res => {
          //need to add toster here
          dispatch(GetAllVendors(res.data.data));
          console.log('Vendors', res);
        })
        .catch(err => {
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const GetAllVendors = data => {
  return {
    type: GET_ALL_VENDORS,
    payload: data,
  };
};

//   Create
export const CreateVendorAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.CreateVendor(body)
        .then(res => {
          //need to add toster here
        })
        .catch(err => {
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

// Get All PArtner

export const getAllPartnerAction = () => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.GetAllPartnerList()
        .then(res => {
          //need to add toster here
          dispatch(GetAllPartners(res.data.data));
          console.log('Vendors', res);
        })
        .catch(err => {
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const GetAllPartners = data => {
  return {
    type: GET_ALL_PARTNERS,
    payload: data,
  };
};

export const CreatePartnerAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.CreatePartner(body)
        .then(res => {
          //need to add toster here
        })
        .catch(err => {
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};
