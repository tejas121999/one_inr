import {
  GET_ALL_PARTNERS,
  GET_ALL_VENDORS,
  GET_VENDOR_BY_ID,
} from '../constTypes';
import MasterServices from '../Services/MasterServices';

// getAll
export const getAllVEndorAction = value => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.GetAllVendorList(value)
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

export const panImgAdd = body => {
  return dispatch => {
    MasterServices.addPanImage(body)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {});
  };
};

export const gstImgAdd = body => {
  return dispatch => {
    MasterServices.addGstImage(body)
      .then(res => {})
      .catch(err => {});
  };
};

// get vendor by id

export const getVendorByID = id => {
  return dispatch => {
    MasterServices.vendorById(id)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {});
  };
};

export const vendorById = data => {
  return {
    type: GET_VENDOR_BY_ID,
    payload: data,
  };
};

// delete vendor

export const DeleteVendorByIdAction = id => {
  return dispatch => {
    MasterServices.deleteVendor(id)
      .then(res => {
        alert(' Vendor Deleted');
        dispatch(getAllVEndorAction(''));
      })
      .catch(err => {});
  };
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
