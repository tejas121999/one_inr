import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function NgoServices() {

  // Service For Add/ Create NGO
  this.createNGO = async body =>
    await axios.post(BASE_URL + 'ngo/create-ngo', body);

  // Service For View All Ngo
  this.getAllNGOList = async () =>
    await axios.get(BASE_URL + `ngo/read-ngo`);

}


export default new NgoServices
