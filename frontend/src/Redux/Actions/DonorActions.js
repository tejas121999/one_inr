import { ADD_DONOR_FUND, VIEW_RECEIPT } from '../../API/APIEndpoints';
import DonorServices from '../Services/DonorServices';

// 1.Login

export const Login = () => {
  return dispatch => {
    DonorServices.LoginAuth()
      .then(res => {
        dispatch(LoginAuthData(res.data.result));
      })
      .catch(error => dispatch(onParentDonorFail(error)));
  };
};

export const LoginAuthData = data => {
  return {
    type: LoginAuth,
    payload: data,
  };
};

export const onLoginAuthFail = data => {
  return {
    type: LoginAuthFail,
    payload: data,
  };
};

// 2.getAllParentDonorAction

export const getAllParentDonorAction = () => {
  return dispatch => {
    DonorServices.getAllParentDonor()
      .then(res => {
        dispatch(getAllParentDonorList(res.data.result));
      })
      .catch(error => dispatch(onParentDonorFail(error)));
  };
};

export const getAllParentDonorList = data => {
  return {
    type: GET_PARENT_LIST,
    payload: data,
  };
};

export const onParentDonorFail = data => {
  return {
    type: GET_PARENT_LIST_FAILED,
    payload: data,
  };
};

// 3.add Donor

export const addDonorAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.AddNewDonor(body)
        .then(res => {
          dispatch(addDonor(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(addDonorFail(res));
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

// 4.getViewAllDonorAction

export const getViewAllDonorAction = () => {
  return dispatch => {
    DonorServices.getViewAllDonor()
      .then(res => {
        dispatch(getViewAllDonorList(res.data.result));
      })
      .catch(error => dispatch(onViewAllDonorFail(error)));
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
        dispatch(getViewReceiptList(res.data.result));
      })
      .catch(error => dispatch(onViewAllDonorFail(error)));
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

export const addDonorAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.AddDonorfund(body)
        .then(res => {
          dispatch(addDonor_fund(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(addDonor_fundFail(res));
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const addDonor_fund = data => {
  return {
    type: ADD_DONOR_FUND,
    payload: data,
  };
};

export const addDonor_fundFail = data => {
  return {
    type: ADD_DONOR_FUND_FAIL,
    payload: data,
  };
};

//7. add user receipt

export const AddUserReceiptAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.createUserReceipt(body)
        .then(res => {
          dispatch(createUserReceiptData(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(oncreateUserReceiptDataFail(res));
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

export const AddUserReceiptAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.updateUserReceipt(body)
        .then(res => {
          dispatch(updateUserReceiptData(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(onUpdateUserReceiptDataFail(res));
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

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
          dispatch(onviewDonorByIdDataFail(res));
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
          dispatch(onRegisterUserDataFail(res));
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
          dispatch(onGetDonorByIdDataFail(res));
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

export const UpdateDonorByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.UpdateDonorById(id)
        .then(res => {
          dispatch(UpdateDonorByIdData(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(onUpdateDonorByIdDataFail(res));
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
          dispatch(onUpdateDonorfundDataFail(res));
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
          dispatch(DeleteDonorByIdData(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(onDeleteDonorByIdDataFail(res));
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const DeleteDonorByIdData = data => {
  return {
    type: Delete_Donor_By_Id,
    payload: data,
  };
};

export const onDeleteDonorByIdDataFail = data => {
  return {
    type: Delete_Donor_By_Id_FAIL,
    payload: data,
  };
};

//14. Create_Vendor

export const CreateVendorAction = body => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.CreateVendor(body)
        .then(res => {
          dispatch(CreateVendorData(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(onCreateVendorDataFail(res));
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const CreateVendorData = data => {
  return {
    type: Create_Vendor,
    payload: data,
  };
};

export const onCreateVendorDataFail = data => {
  return {
    type: Create_Vendor_FAIL,
    payload: data,
  };
};

//15. Update_Vendor_By_Id

export const UpdateVendorByIdAction = id => {
  if (navigator.onLine) {
    return dispatch => {
      DonorServices.UpdateVendorById(id)
        .then(res => {
          dispatch(UpdateVendorByIdData(res));
          //need to add toster here
        })
        .catch(err => {
          dispatch(onUpdateVendorByIdDataFail(res));
          //need to add toster here
        });
    };
  } else {
    //need to add toster here
  }
};

export const UpdateVendorByIdData = data => {
  return {
    type: Update_Vendor_By_Id,
    payload: data,
  };
};

export const onUpdateVendorByIdDataFail = data => {
  return {
    type: Update_Vendor_By_Id_FAIL,
    payload: data,
  };
};
