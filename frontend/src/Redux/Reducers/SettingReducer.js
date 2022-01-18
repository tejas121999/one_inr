import {
  GET_PROFILE,
  GET_ROLL_LIST,
  GET_USER_LIST,
  GET_REZORPAY,
  Update_User_By_Id_FAIL,
  Update_User_By_Id,
  Get_User_By_Id_FAIL,
  Get_User_By_Id,
  GET_USER_LIST_FAIL,
  ADD_USER_FAIL,
  ADD_USER,
  UPDATE_CONFIG,
  GET_CONFIG,
  UPDATE_RAZORPAY_BY_ID,
  ADD_RAZORPAY,
  GET_RAZORPAY,
} from '../constTypes';

const initialState = {
  getProfile: [],
  getRoleList: [],
  getUserList: [],
  addUser: [],
  GetUserById: [],
  UpdateUserById: [],
  getConfig: [],
  updateConfig: [],
  getRazorpay: [],
  addRazorpay: [],
  updateRazorpayById: [],
};

export const SettingReducer = (state = initialState, action) => {
  switch (action.type) {
    // get profile
    case GET_PROFILE: {
      return {
        ...state,
        getProfile: action.payload,
      };
    }

    // get roll
    case GET_ROLL_LIST: {
      return {
        ...state,
        getRoleList: action.payload,
      };
    }

    // Get user List
    case GET_USER_LIST: {
      return {
        ...state,
        getUserList: action.payload,
        isLoadding: true,
      };
    }

    case GET_USER_LIST_FAIL: {
      return {
        ...state,
        getUserList: action.payload,
        isLoadding: true,
      };
    }

    // ADD USER
    case ADD_USER: {
      return {
        ...state,
        addUser: action.payload,
        isLoadding: true,
      };
    }

    case ADD_USER_FAIL: {
      return {
        ...state,
        addUser: action.payload,
        isLoadding: true,
      };
    }

    //GetUserById
    case Get_User_By_Id: {
      return {
        ...state,
        GetUserById: action.payload,
        isLoadding: true,
      };
    }

    case Get_User_By_Id_FAIL: {
      return {
        ...state,
        GetUserById: action.payload,
        isLoadding: true,
      };
    }

    //UpdateUserById
    case Update_User_By_Id: {
      return {
        ...state,
        UpdateUserById: action.payload,
        isLoadding: true,
      };
    }

    case Update_User_By_Id_FAIL: {
      return {
        ...state,
        UpdateUserById: action.payload,
        isLoadding: true,
      };
    }

    //GET CONFIG
    case GET_CONFIG: {
      return {
        ...state,
        getConfig: action.payload,
      };
    }

    //UPDATE CONFIG
    case UPDATE_CONFIG: {
      return {
        ...state,
        updateConfig: action.payload,
      };
    }

    // GET RAZORPAY CREDENTIALS
    case GET_RAZORPAY: {
      return {
        ...state,
        getRazorpay: action.payload,
      };
    }

    // ADD RAZORPAY CREDENTIALS
    case ADD_RAZORPAY: {
      return {
        ...state,
        addRazorpay: action.payload,
      };
    }

    // UPDATE RAZORPAY CREDENTIALS
    case UPDATE_RAZORPAY_BY_ID: {
      return {
        ...state,
        updateRazorpayById: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
