import { combineReducers } from 'redux';
import { DonorReducer } from './DonorReducer';
import { authReducer } from './authReducer';
export default combineReducers({
  donor: DonorReducer,
  auth: authReducer,
});
