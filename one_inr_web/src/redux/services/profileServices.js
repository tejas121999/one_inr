import axios from '../../utils/interceptor'
import { BASE_URL } from '../../utils/ApiEndpoint'

function profileServices() {
    // get my profile
    this.getMyProfile = async () => await axios.get(BASE_URL + '')
    this.updateMyProfile = async body => await axios.post(BASE_URL + '', body)

    // change password
    this.changePassword = async body => await axios.post(BASE_URL + '', body)

    // back campaigns
    this.getAllBackCampaigns = async () => axios.get(BASE_URL + '')
    this.getBackCampaignsByid = async id => axios.get(BASE_URL + '', id)

    // wallet
    this.AddMoneyToWallet = async body => await axios.post(BASE_URL + '', body)
    this.ChangePlane = async body => await axios.post(BASE_URL + '', body)
}
export default new profileServices();