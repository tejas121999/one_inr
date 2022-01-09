import axios from "../../utils/interceptor"
import { BASE_URL } from "../../API/APIEndpoints"

function AccountServices() {
    // vendor payment history
    this.getAllVendorPayment = async () => await axios.get(BASE_URL + '#');
    this.updateVendorPayment = async body => await axios.put(BASE_URL + '', body)

    // partner payment history 
    this.getPartnerPayment = async () => await axios.get(BASE_URL + '#');
    this.updatePartnerPayment = async body => await axios.put(BASE_URL + '#', body)
}

export default AccountServices
