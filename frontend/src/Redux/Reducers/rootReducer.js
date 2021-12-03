import { combineReducers } from 'redux';
import { DonorReducer } from './DonorReducer';
import { authReducer } from './authReducer';
import { masterReducer } from './MasterReducer';
export default combineReducers({
  donor: DonorReducer,
  auth: authReducer,
  master: masterReducer,
});
