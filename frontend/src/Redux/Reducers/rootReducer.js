import { combineReducers } from 'redux';
import { DonorReducer } from './DonorReducer';
import { authReducer } from './authReducer';
import { masterReducer } from './MasterReducer';
import { ngoReducer } from './NgoReducer';

export default combineReducers({
  donor: DonorReducer,
  auth: authReducer,
  master: masterReducer,
  ngo: ngoReducer,
});
