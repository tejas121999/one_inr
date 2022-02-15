import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function NgoServices() {
  // Service For Add/ Create NGO
  this.createNGO = async body => await axios.post(BASE_URL + 'ngo', body);

  // Service For View All Ngo
  this.getAllNGOListByValue = async value =>
    await axios.get(BASE_URL + `ngo/?search=${value}`);

  this.getNgoById = async id => await axios.get(BASE_URL + `ngo/${id}`);

  this.GetAllNgoList = async () => await axios.get(BASE_URL + 'ngo');

  this.updateNgoById = async (body, id) =>
    await axios.put(BASE_URL + `ngo/${id}`, body);
  this.deleteNgo = async id => await axios.delete(BASE_URL + `ngo/${id}`);

  this.getNgoProjectList = async id =>
    await axios.get(BASE_URL + `ngo/projects/${id}`);

  // this.UpdateNgo = async (body, id) =>
  //   await axios.put(BASE_URL + `ngo/update-ngo`, body);
}

export default new NgoServices();
