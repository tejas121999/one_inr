import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';

function MasterServices() {
  // *************   vendor    ****************
  // Get All vendor
  this.GetAllVendorList = async value =>
    await axios.get(BASE_URL + `vendor?search=${value}`);

  this.CreateVendor = async body => await axios.post(BASE_URL + 'vendor', body);
  this.vendorById = async id => await axios.get(BASE_URL + `vendor/${id}`);
  this.UpdateVendorById = async id =>
    await axios.post(BASE_URL + `vendor/${id}`);
  this.deleteVendor = async id => await axios.delete(BASE_URL + `vendor/${id}`);
  this.updateVendor = async (id, body) =>
    await axios.put(BASE_URL + `vendor/${id}`, body);
  // Partner
  this.GetAllPartnerList = async value =>
    await axios.get(BASE_URL + `partner?search=${value}`);
  this.CreatePartner = async body =>
    await axios.post(BASE_URL + 'partner', body);
  this.deletePartner = async id =>
    await axios.delete(BASE_URL + `partner/${id}`);
  this.addPanImage = async body =>
    await axios.post(BASE_URL + 'fileupload?reason=vendor_pan', body);

  this.addGstImage = async body =>
    await axios.post(BASE_URL + 'fileupload?reason=vendor_gst', body);
}

export default new MasterServices();
