import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function NgoServices() {
  // Service For Add/ Create NGO
  this.createNGO = async body =>
    await axios.post(BASE_URL + 'ngo/create-ngo', body);

  // Service For View All Ngo
  this.getAllNGOList = async value =>
    await axios.get(BASE_URL + `ngo/read-ngo?search=${value}`);

  this.GetAllNgoList = async value =>
    await axios.get(BASE_URL + `ngo/read-ngo?search=&from=2&to=3`);

  this.UpdateNgo = async (body, id) =>
    await axios.put(BASE_URL + `ngo/update-ngo`, body);
  this.deleteNgo = async id => await axios.delete(BASE_URL + `ngo/delete-ngo}`);
}

export default new NgoServices();
