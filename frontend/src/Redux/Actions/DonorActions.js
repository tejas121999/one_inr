import { toast } from 'react-toastify';
import {
  AddUserReceipt,
  AddUserReceipt_FAIL,
  ADD_DONOR,
  ADD_DONOR_FAIL,
  add_Donor_Fund,
  ADD_DONOR_FUND,
  add_Donor_Fund_FAIL,
  AllDonor,
  AllDonor_FAILED,
  DELETE_DONOR_BY_ID,
  DELETE_DONOR_BY_ID_FAIL,
  Get_Donor_By_Id,
  Get_Donor_By_Id_FAIL,
  GET_PARENT_LIST,
  GET_RECEIPT_DATA,
  GET_UPCOMING_DONORS,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  UpdateUserReceipt,
  UpdateUserReceipt_FAIL,
  Update_Donor_By_Id,
  Update_Donor_By_Id_FAIL,
  VIEW_DONER_BY_ID,
  VIEW_DONER_BY_ID_FAIL,
  VIEW_RECEIPT,
  VIEW_RECEIPT_FAILED,
} from '../constTypes';
import DonorServices from '../Services/DonorServices';

// 2.getAllParentDonorAction

export const getAllParentDonorAction = data => {
  return dispatch => {
    DonorServices.getAllParentDonor()
      .then(res => {
        dispatch(getAllParentDonorList(res.data.data));
        // console.log('res.data.data', res.data.data);
      })
      .catch(error => {});
  };
};

export const getAllParentDonorList = data => {
  return {
    type: GET_PARENT_LIST,
    payload: data,
  };
};

// 3.add Donor

export const addDonorAction = (body, history) => {
  console.log('Chinmay', body);
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.AddNewDonor(body)
        .then(res => {
          console.log('Created', res);
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('/view_all_doner');
          }, 2000);

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

export const addDonor = data => {
  return {
    type: ADD_DONOR,
    payload: data,
  };
};

export const addDonorFail = data => {
  return {
    type: ADD_DONOR_FAIL,
    payload: data,
  };
};

// BUlk upload
export const addDonorBulkAction = (body, history) => {
  console.log('Chinmay', body);
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.AddNewBulkDonor(body)
        .then(res => {
          console.log('Created', res);
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            history.push('/view_all_doner');
          }, 2000);

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
// 4.getViewAllDonorAction

export const getViewAllDonorAction = data => {
  return dispatch => {
    DonorServices.getViewAllDonor()
      .then(res => {
        dispatch(getViewAllDonorList(res.data.data));
      })
      .catch(error => {});
  };
};

export const getDonorByValueAction = value => {
  return dispatch => {
    DonorServices.getDonorByValue(value).then(res => {
      dispatch(getViewAllDonorList(res.data.data));
    });
  };
};
export const getViewAllDonorList = data => {
  return {
    type: AllDonor,
    payload: data,
  };
};

export const onViewAllDonorFail = data => {
  return {
    type: AllDonor_FAILED,
    payload: data,
  };
};

// 5.VIEW_RECEIPT

export const getViewReceiptDonorAction = () => {
  return dispatch => {
    DonorServices.getViewReceipt()
      .then(res => {
        dispatch(getViewReceiptList(res.data.data.rows));
      })
      .catch(error => dispatch(onViewAllDonorFail(error)));
  };
};

export const SearchReceiptByValueAction = value => {
  return dispatch => {
    DonorServices.SearchReceiptByValue(value).then(res => {
      dispatch(getViewReceiptList(res.data.data.rows));
    });
  };
};
export const getViewReceiptList = data => {
  return {
    type: VIEW_RECEIPT,
    payload: data,
  };
};

export const onViewReceiptFail = data => {
  return {
    type: VIEW_RECEIPT_FAILED,
    payload: data,
  };
};

// 6.add Donor Fund

export const addDonorFundAction = (id, body) => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.AddDonorfund(id, body)
        .then(res => {
          console.log('Funded', res.data);
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          dispatch(addDonor_fund(res));
          dispatch(getViewAllDonorAction());
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
export const getReceiptbyId = () => {
  return dispatch => {
    // console.log("menuGroupCode",menuGroupCode);

    dispatch(getReceiptDatabyId());
  };
};
export const getReceiptDatabyId = data => {
  return {
    type: GET_RECEIPT_DATA,
    payload: data,
  };
};
export const addDonor_fund = data => {
  return {
    type: ADD_DONOR_FUND,
    payload: data,
  };
};

export const addDonor_fundFail = data => {
  return {
    type: add_Donor_Fund_FAIL,
    payload: data,
  };
};

//7. add user receipt

export const AddUserReceiptAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.createUserReceipt(body)
        .then(res => {
          dispatch(createUserReceiptData(res.data.data.rows));
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

export const createUserReceiptData = data => {
  return {
    type: AddUserReceipt,
    payload: data,
  };
};

export const oncreateUserReceiptDataFail = data => {
  return {
    type: AddUserReceipt_FAIL,
    payload: data,
  };
};

//7.b add user receipt

export const updateUserReceiptData = data => {
  return {
    type: UpdateUserReceipt,
    payload: data,
  };
};

export const onUpdateUserReceiptDataFail = data => {
  return {
    type: UpdateUserReceipt_FAIL,
    payload: data,
  };
};

//8. VIEW_DONER_BY_ID

export const viewDonorByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.viewDonorById(id)
        .then(res => {
          dispatch(viewDonorByIdData(res));
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

export const viewDonorByIdData = data => {
  return {
    type: VIEW_DONER_BY_ID,
    payload: data,
  };
};

export const onviewDonorByIdDataFail = data => {
  return {
    type: VIEW_DONER_BY_ID_FAIL,
    payload: data,
  };
};

// 9.REGISTER_USER

export const RegisterUserAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.RegisterUser(body)
        .then(res => {
          dispatch(RegisterUserData(res));
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

export const RegisterUserData = data => {
  return {
    type: REGISTER_USER,
    payload: data,
  };
};

export const onRegisterUserDataFail = data => {
  return {
    type: REGISTER_USER_FAIL,
    payload: data,
  };
};

// 10.Get_Donor_By_Id

export const GetDonorByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.GetDonorById(id)
        .then(res => {
          dispatch(GetDonorByIdData(res));
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

export const GetDonorByIdData = data => {
  return {
    type: Get_Donor_By_Id,
    payload: data,
  };
};

export const onGetDonorByIdDataFail = data => {
  return {
    type: Get_Donor_By_Id_FAIL,
    payload: data,
  };
};

// 11.Update_Donor_By_Id

export const UpdateDonorByIdAction = (id, data) => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.UpdateDonorById(id, data)
        .then(res => {
          dispatch(UpdateDonorByIdData(res));
          console.log('Updated', res.data);
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          setTimeout(function () {
            window.history.back();
          }, 2000);
          //need to add toster here
        })
        .catch(err => {
          window.history.back();
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const UpdateDonorByIdData = data => {
  return {
    type: Update_Donor_By_Id,
    payload: data,
  };
};

export const onUpdateDonorByIdDataFail = data => {
  return {
    type: Update_Donor_By_Id_FAIL,
    payload: data,
  };
};

//12. add_Donor_Fund

export const UpdateDonorfundAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.UpdateDonorfund(id)
        .then(res => {
          dispatch(UpdateDonorfundData(res));
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

export const UpdateDonorfundData = data => {
  return {
    type: add_Donor_Fund,
    payload: data,
  };
};

export const onUpdateDonorfundDataFail = data => {
  return {
    type: add_Donor_Fund_FAIL,
    payload: data,
  };
};

//13. Delete_Donor_By_Id

export const DeleteDonorByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.DeleteDonorById(id)
        .then(res => {
          toast.success('Donor Deleted', {
            position: 'top-center',
            autoClose: 3000,
          });
          dispatch(getViewAllDonorAction());
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

export const DeleteDonorByIdData = data => {
  return {
    type: DELETE_DONOR_BY_ID,
    payload: data,
  };
};

export const onDeleteDonorByIdDataFail = data => {
  return {
    type: DELETE_DONOR_BY_ID_FAIL,
    payload: data,
  };
};

// Upcoming Donor Renewal

export const getUpcomingDonorAction = value => {
  return dispatch => {
    DonorServices.getAllUpcomingDonor(value)
      .then(res => {
        dispatch(UpcomingDonorList(res.data.data));
      })
      .catch(error => {
        // dispatch(UpcomingDonorList(value));
      });
  };
};

export const UpcomingDonorList = data => {
  return {
    type: GET_UPCOMING_DONORS,
    payload: data,
  };
};

// add Upcoming donor fund

export const addUpcomingDonorFundAction = (id, body) => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.UpcomingDonorfund(id, body)
        .then(res => {
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          dispatch(getUpcomingDonorAction(''));
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

// delete

export const DeleteUpcomingDonorByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.DeleteUpcomingDonorById(id)
        .then(res => {
          // dispatch(DeleteDonorByIdData(res));

          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 2000,
          });
          dispatch(getUpcomingDonorAction(''));
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
