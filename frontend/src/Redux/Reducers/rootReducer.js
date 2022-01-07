import { combineReducers } from 'redux';
import { DonorReducer } from './DonorReducer';
import { authReducer } from './authReducer';
import { masterReducer } from './MasterReducer';
import { ngoReducer } from './NgoReducer';
import { projectReducer } from './ProjectReducer';
import { SettingReducer } from './SettingReducer';
export default combineReducers({
  donor: DonorReducer,
  auth: authReducer,
  master: masterReducer,
  ngo: ngoReducer,
  project: projectReducer,
  setting: SettingReducer
});
