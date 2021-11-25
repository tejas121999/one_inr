import { combineReducers } from 'redux';
import { DonorReducer } from './DonorReducer';
export default combineReducers({
  donor: DonorReducer,
});
