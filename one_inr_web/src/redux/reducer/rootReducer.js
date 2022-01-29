import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { campaignsReducer } from "./campaignsReducer";
import { profileReducer } from "./profileReducer";
export  default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    camp: campaignsReducer
})