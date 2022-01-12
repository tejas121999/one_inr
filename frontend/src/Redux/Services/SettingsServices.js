import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function SettingsServices() {
  // profile
  this.getProfile = async () => await axios.get(BASE_URL + 'user/my-profile');
  this.updateProfile = async body =>
    await axios.put(BASE_URL + 'user/update', body);
  this.changePassword = async body =>
    await axios.put(BASE_URL + 'user/update/password', body);

  // role list
  this.getRoleList = async () => await axios.get(BASE_URL + '');
  this.addRoleList = async body => await axios.get(BASE_URL + '#', body);
}

export default new SettingsServices();
