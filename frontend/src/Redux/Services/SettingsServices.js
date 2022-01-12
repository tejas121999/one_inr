import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function SettingsServices() {
  // profile
  this.getProfile = async () => await axios.get(BASE_URL + 'user/my-profile');
  this.updateProfile = async body =>
    await axios.put(BASE_URL + 'user/update', body);
  this.updateProfileImg = async body => await axios.post(BASE_URL + '#', body);
  this.changePassword = async body =>
    await axios.put(BASE_URL + 'user/update/password', body);

  // role list
  this.getRoleList = async () => await axios.get(BASE_URL + '#');
  this.addRoleList = async body => await axios.post(BASE_URL + '#', body);
  this.editRollList = async body => await axios.put(BASE_URL + '#', body);
  this.deleteRole = async id => await axios.delete(BASE_URL + '#', id);

  // user list
  this.getUserList = async () => await axios.get(BASE_URL + 'user');
  this.getUserListByValue = async value =>
    await axios.get(BASE_URL + `user/?search=${value}`);
  this.addUserList = async body => await axios.post(BASE_URL + 'user', body);
  this.updateUserList = async body => await axios.put(BASE_URL + '#', body);
  this.deleteUserList = async id => await axios.delete(BASE_URL + '#', id);

  // config
  this.updateConfig = async body => await axios.delete(BASE_URL + '', body);

  // RAZORPAY CREDENTIALS
  this.getAllRazorpay = async () => await axios.get(BASE_URL + '#');
  this.addRezorpay = async body => await axios.post(BASE_URL + '#', body);
  this.updateRezorpay = async body => await axios.put(BASE_URL + '#', body);
  this.deleteRezorpay = async id => await axios.delete(BASE_URL + '#', id);
}

export default new SettingsServices();
