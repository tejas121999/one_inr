import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function NgoServices() {

  // Service For Add/ Create NGO
  this.createNGO = async body =>
    await axios.post(BASE_URL + 'ngo/create-ngo', body);

  // Service For View All Ngo
  this.getAllNGOList = async () =>
    await axios.get(BASE_URL + `ngo/read-ngo`);

    this.GetAllNgoList = async value =>
    await axios.get(BASE_URL + `ngo/read-ngo?search=&from=2&to=3`);
    
    this.updateNgo = async (body, id) =>
    await axios.put(BASE_URL + `ngo/update-ngo/${id}`, body);
    this.deleteNgo = async id =>
    await axios.delete(BASE_URL + `ngo/delete-ngo/${id}`);

    

}


export default new NgoServices
