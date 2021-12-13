import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';

function NgoServices() {

  // Service For Add/ Create NGO
  this.createNGO = async body =>
    await axios.post(BASE_URL + 'ngo/create-ngo', body);

}

export default new NgoServices
