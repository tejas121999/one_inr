import axios from "../../utils/interceptor"
import { BASE_URL } from "../../API/APIEndpoints"

function AccountServices() {
    // vendor payment history
    this.getAllVendorPayment = async () => await axios.get(BASE_URL + '#');
    this.updateVendorPayment = async id => await axios.put(BASE_URL + '', id)

    // partner payment history 
    this.getPartnerPayment = async () => await axios.get(BASE_URL + '#');
    this.updatePartnerPayment = async body => await axios.put(BASE_URL + '#', body)

    // completed project
    // view
    // view complete project by id
    this.getCompletedProjectById = async id => await axios.get(BASE_URL + '#', id);

    // get doner list by id
    this.getDonerListById = async id => await axios.get(BASE_URL + '#', id);

    // get vendor payment history 
    this.getVendorListById = async id => await axios.get(BASE_URL + '#', id);

    // get partner payment history
    this.getPartnerPaymentHistort = async id => await axios.get(BASE_URL + '#', id);

    // completed project 
    // transfer
    // vendor paymenr
    this.postVendorPayment = async body => await axios.post(BASE_URL + '#', body)

    // partner payment
    this.postPartnerPayment = async body => await axios.post(BASE_URL + '#', body)

}

export default AccountServices
