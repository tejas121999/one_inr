import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';

const DonorServices = () => {
  //1. Login Auth
  LoginAuth = async body => await axios.post(BASE_URL + 'auth', body);

  //2. all donor Parent list
  getAllParentDonor = async () => await axios.get(BASE_URL + 'donor/parents');

  //3. add new donor
  AddNewDonor = async body => await axios.post(BASE_URL + 'donor', body);

  //4. get all donor list
  getViewAllDonor = async () => await axios.get(BASE_URL + 'donor');

  getViewAllDonorPagination = async (pagelimit, pagenumber) =>
    await axios.get(BASE_URL + `donor/?search=&from=${40}&to=${42}`);

  //5. view receipt
  getViewReceipt = async () =>
    await axios.get(BASE_URL + 'userReceipts/get-user');

  //6. add donor fund
  AddDonorfund = async body =>
    await axios.post(BASE_URL + 'donor/balance', body);

  //7.a add user receipt
  createUserReceipt = async body =>
    await axios.post(BASE_URL + 'userReceipts/add-user', body);

  //7.b add user receipt
  updateUserReceipt = async body =>
    await axios.post(BASE_URL + 'userReceipts/update-user', body);

  //8. VIEW_DONER_BY_ID
  viewDonorById = async id => await axios.delete(BASE_URL + `donor/${id}`);

  //9. REGISTER_USER
  RegisterUser = async body =>
    await axios.delete(BASE_URL + 'auth/register', body);

  //10. GET_DONER_BY_ID
  GetDonorById = async id => await axios.delete(BASE_URL + `donor/${id}`);

  //11. UPDATE_DONOR_BY_ID
  UpdateDonorById = async id => await axios.delete(BASE_URL + `donor/${id}`);

  //12. add donor fund
  UpdateDonorfund = async id =>
    await axios.post(BASE_URL + `donor/balance/${id}`);

  //13. delete donor by id
  DeleteDonorById = async id => await axios.post(BASE_URL + `donor/${id}`);

  // *************   vendor    ****************

  //14. CREATE A VENDOR

  CreateVendor = async body => await axios.post(BASE_URL + 'vendor', body);

  //15. UPDATE VENDOR by id

  UpdateVendorById = async id => await axios.post(BASE_URL + `vendor/${id}`);

  //16. SAVING IMAGE VENDOR
};

export default new DonorServices();
