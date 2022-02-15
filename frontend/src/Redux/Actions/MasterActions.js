import { toast } from 'react-toastify';
import {
  GET_ALL_PARTNERS,
  GET_ALL_VENDORS,
  GET_VENDOR_BY_ID,
  GET_PARTNER_BY_ID,
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
        })
        .catch(err => {
          // dispatch(GetAllVendors(value));
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
    return async dispatch => {
      MasterServices.CreateVendor(body)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('/Vendor');
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

export const panImgAdd = body => {
  return dispatch => {
    MasterServices.addPanImage(body)
      .then(res => {})
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
        toast.success(res.data.messgae, {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(function () {
          history.push('/Vendor');
        }, 2000);
      })
      .catch(err => {});
  };
};
// delete vendor

export const DeleteVendorByIdAction = id => {
  return dispatch => {
    MasterServices.deleteVendor(id)
      .then(res => {
        toast.success(res.data.message, {
          position: 'top-center',
          autoClose: 2000,
        });
        dispatch(getAllVEndorAction(''));
      })
      .catch(err => {});
  };
};
// Get All PArtner

export const getAllPartnerAction = value => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.GetAllPartnerList(value)
        .then(res => {
          //need to add toster here
          dispatch(GetAllPartners(res.data.result));
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

export const CreatePartnerAction = (body, history) => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.CreatePartner(body)
        .then(res => {
          //need to add toster here
          console.log('Created', res.data);
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('/Partner');
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

export const UpdatePartnerAction = (body, id, history) => {
  if (navigator.onLine) {
    return dispatch => {
      MasterServices.UpdatePartner(body, id)
        .then(res => {
          //need to add toster here

          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('/Partner');
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

export const getPartnerByID = id => {
  return dispatch => {
    MasterServices.getPartner(id).then(res => {
      dispatch(partnerById(res.data.data));
    });
  };
};

export const partnerById = data => {
  return {
    type: GET_PARTNER_BY_ID,
    payload: data,
  };
};
export const DeletePartnerByIdAction = id => {
  return dispatch => {
    MasterServices.deletePartner(id)
      .then(res => {
        console.log(' Vendor Deleted', res.data);
        toast.success(res.data.messgae, {
          position: 'top-center',
          autoClose: 2000,
        });
        dispatch(getAllVEndorAction(''));
      })
      .catch(err => {});
  };
};
