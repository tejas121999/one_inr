import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';

function ViewAllDonorService() {
  this.getAdminAllocationHistoryLength = async () =>
    await axios.get(BASE_URL + '/points/admin-points-history');
}

export default new ViewAllDonorService();
