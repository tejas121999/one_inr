import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';

function MasterServices() {
  // *************   vendor    ****************
  // Get All vendor
  this.GetAllVendorList = async () => await axios.get(BASE_URL + 'vendor');

  this.CreateVendor = async body => await axios.post(BASE_URL + 'vendor', body);

  this.UpdateVendorById = async id =>
    await axios.post(BASE_URL + `vendor/${id}`);

  this.GetAllPartnerList = async () => await axios.get(BASE_URL + 'partner');
  this.CreatePartner = async body =>
    await axios.post(BASE_URL + 'partner', body);
  this.addPanImage = async body =>
    await axios.post(BASE_URL + 'fileupload?reason=vendor_pan', body);

  this.addGstImage = async body =>
    await axios.post(BASE_URL + 'fileupload?reason=vendor_gst', body);
}

export default new MasterServices();
