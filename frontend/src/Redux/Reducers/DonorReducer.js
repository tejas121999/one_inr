import {
  AddUserReceipt,
  AddUserReceipt_FAIL,
  ADD_DONOR,
  ADD_DONOR_FAIL,
  ADD_DONOR_FUND,
  ADD_DONOR_FUND_FAIL,
  AllDonor,
  AllDonor_FAILED,
  GET_PARENT_LIST,
  GET_PARENT_LIST_FAILED,
  LoginAuth,
  LoginAuthFail,
  REGISTER_USER,
  UpdateUserReceipt,
  UpdateUserReceipt_FAIL,
  VIEW_DONER_BY_ID,
  VIEW_DONER_BY_ID_FAIL,
  VIEW_RECEIPT,
  VIEW_RECEIPT_FAILED,
  REGISTER_USER_FAIL,
  Get_Donor_By_Id,
  Get_Donor_By_Id_FAIL,
  Update_Donor_By_Id,
  Update_Donor_By_Id_FAIL,
  GET_UPCOMING_DONORS,
} from '../constTypes';

const initialState = {
  loginAuth: [],
  allParent: [],
  addDonor: [],
  ViewAllDonor: [],
  ViewReceipt: [],
  addDonorFund: [],
  add_user_receipt: [],
  Update_user_receipt: [],
  registeUser: [],
  viewDonorById: [],
  GetDonorById: [],
  UpdateDonorById: [],
  isLoadding: false,
  upComingDonors: [],
};

export const DonorReducer = (state = initialState, action) => {
  console.log('Called');
  switch (action.type) {
    // 1. GET_PARENT_LIST

    case LoginAuth: {
      return {
        ...state,
        loginAuth: action.payload,
        isLoadding: true,
      };
    }
    case LoginAuthFail: {
      return {
        ...state,
        loginAuth: action.payload,
        isLoadding: true,
      };
    }

    // 2. GET_PARENT_LIST

    case GET_PARENT_LIST: {
      return {
        ...state,
        allParent: action.payload,
        isLoadding: true,
      };
    }
    case GET_PARENT_LIST_FAILED: {
      return {
        ...state,
        allParent: action.payload,
        isLoadding: true,
      };
    }

    // 3.ADD DONOR

    case ADD_DONOR: {
      return {
        ...state,
        addDonor: action.payload,
        isLoadding: true,
      };
    }

    case ADD_DONOR_FAIL: {
      return {
        ...state,
        addDonor: action.payload,
        isLoadding: true,
      };
    }

    // 4. view All Donor

    case AllDonor: {
      return {
        ...state,
        ViewAllDonor: action.payload,
        isLoadding: true,
      };
    }
    case AllDonor_FAILED: {
      return {
        ...state,
        ViewAllDonor: action.payload,
        isLoadding: true,
      };
    }

    //5.VIEW_RECEIPT

    case VIEW_RECEIPT: {
      return {
        ...state,
        ViewReceipt: action.payload,
        isLoadding: true,
      };
    }
    case VIEW_RECEIPT_FAILED: {
      return {
        ...state,
        ViewReceipt: action.payload,
        isLoadding: true,
      };
    }

    // 6.add fund

    case ADD_DONOR_FUND: {
      return {
        ...state,
        addDonorFund: action.payload,
        isLoadding: true,
      };
    }

    case ADD_DONOR_FUND_FAIL: {
      return {
        ...state,
        addDonorFund: action.payload,
        isLoadding: true,
      };
    }

    //7. add user receipt

    case AddUserReceipt: {
      return {
        ...state,
        add_user_receipt: action.payload,
        isLoadding: true,
      };
    }

    case AddUserReceipt_FAIL: {
      return {
        ...state,
        add_user_receipt: action.payload,
        isLoadding: true,
      };
    }

    //7.b. update user receipt

    case UpdateUserReceipt: {
      return {
        ...state,
        Update_user_receipt: action.payload,
        isLoadding: true,
      };
    }

    case UpdateUserReceipt_FAIL: {
      return {
        ...state,
        Update_user_receipt: action.payload,
        isLoadding: true,
      };
    }

    //8. VIEW_DONER_BY_ID

    case VIEW_DONER_BY_ID: {
      return {
        ...state,
        viewDonorById: action.payload,
        isLoadding: true,
      };
    }

    case VIEW_DONER_BY_ID_FAIL: {
      return {
        ...state,
        viewDonorById: action.payload,
        isLoadding: true,
      };
    }

    //9. REGISTER_USER

    case REGISTER_USER: {
      return {
        ...state,
        registeUser: action.payload,
        isLoadding: true,
      };
    }

    case REGISTER_USER_FAIL: {
      return {
        ...state,
        registeUser: action.payload,
        isLoadding: true,
      };
    }

    //10. GetDonorById

    case Get_Donor_By_Id: {
      return {
        ...state,
        GetDonorById: action.payload,
        isLoadding: true,
      };
    }

    case Get_Donor_By_Id_FAIL: {
      return {
        ...state,
        GetDonorById: action.payload,
        isLoadding: true,
      };
    }

    //11. UpdateDonorById

    case Update_Donor_By_Id: {
      return {
        ...state,
        UpdateDonorById: action.payload,
        isLoadding: true,
      };
    }

    case Update_Donor_By_Id_FAIL: {
      return {
        ...state,
        UpdateDonorById: action.payload,
        isLoadding: true,
      };
    }

    // UPCOMING DONORS

    case GET_UPCOMING_DONORS: {
      return {
        ...state,
        upComingDonors: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
