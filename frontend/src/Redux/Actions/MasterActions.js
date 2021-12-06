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
          dispatch(GetAllVendors(value));
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
export const CreateVendorAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.CreateVendor(body)
        .then(res => {
          history.push('/Vendor');
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
        dispatch(vendorById(res.data.data));
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

export const updateVendorById = (id, data, history) => {
  return dispatch => {
    MasterServices.updateVendor(id, data)
      .then(res => {
        console.log('res', res);
        history.push('/Vendor');
      })
      .catch(err => {});
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

export const getAllPartnerAction = data => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.GetAllPartnerList()
        .then(res => {
          //need to add toster here
          dispatch(GetAllPartners(res.data.data));
          console.log('Vendors', res);
        })
        .catch(err => {
          dispatch(GetAllPartners(data));
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

export const CreatePartnerAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.CreatePartner(body)
        .then(res => {
          //need to add toster here
          history.push('/Partner');
        })
        .catch(err => {
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const DeletePartnerByIdAction = id => {
  return dispatch => {
    MasterServices.deletePartner(id)
      .then(res => {
        alert(' Vendor Deleted');
        dispatch(getAllVEndorAction(''));
      })
      .catch(err => {});
  };
};
