import axios from '../../utils/interceptor'
import { BASE_URL } from '../../utils/ApiEndpoint'

function campaignsServices() {
    // get all campaigns
    this.getAllCAmpaigns = async () => axios.get(BASE_URL + '')
    this.getCampaignsById = async () => axios.get(BASE_URL + '')
}
export default new campaignsServices();