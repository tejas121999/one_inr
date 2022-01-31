import axios from '../../../src/utils/interceptor';
import {
  BASE_URL
} from '../../API/APIEndpoints';

function DonorServices() {
  //2. all donor Parent list
  this.getAllParentDonor = async () =>
    await axios.get(BASE_URL + 'donor/parents/');

  // this.getDonorData = async () =>
  //   await axios.get(BASE_URL + 'donor/parents');

  //3. add new donor
  this.AddNewDonor = async body => await axios.post(BASE_URL + 'donor', body);
  this.AddNewBulkDonor = async body =>
    await axios.post(BASE_URL + 'donor/bulkDonor-upload', body);

  //4. get all donor list
  this.getViewAllDonor = async () => await axios.get(BASE_URL + 'donor');
  this.getDonorByValue = async value =>
    await axios.get(BASE_URL + `donor/?search=${value}`);

  this.getViewAllDonorPagination = async (pagelimit, pagenumber) =>
    await axios.get(BASE_URL + `donor/?search=&from=${40}&to=${42}`);

  //5. view receipt
  this.getViewReceipt = async () => await axios.get(BASE_URL + 'userReceipts');

  //6. add donor fund
  this.AddDonorfund = async (id, body) =>
    await axios.put(BASE_URL + `donor/balance/${id}`, body);

  //7.a add user receipt
  this.createUserReceipt = async body =>
    await axios.post(BASE_URL + 'userReceipts/', body);

  //7.b add user receipt
  this.updateUserReceipt = async (body, id) =>
    await axios.post(BASE_URL + `userReceipts/${id}`, body);
  //7.c search user receipt
  this.SearchReceiptByValue = async value =>
    await axios.get(BASE_URL + `/?search=${value}`);

  //8. VIEW_DONER_BY_ID
  this.viewDonorById = async id => await axios.delete(BASE_URL + `donor/${id}`);

  //9. REGISTER_USER
  this.RegisterUser = async body =>
    await axios.delete(BASE_URL + 'auth/register', body);

  //10. GET_DONER_BY_ID
  this.GetDonorById = async id => await axios.get(BASE_URL + `donor/${id}`);

  //11. UPDATE_DONOR_BY_ID
  this.UpdateDonorById = async (id, body) =>
    await axios.put(BASE_URL + `donor/${id}`, body);

  //12. add donor fund
  this.UpdateDonorfund = async id =>
    await axios.post(BASE_URL + `donor/balance/${id}`);

  //13. delete donor by id
  this.DeleteDonorById = async id =>
    await axios.delete(BASE_URL + `donor/${id}`);

  // UPCOMING DONERS
  this.getAllUpcomingDonor = async value =>
    await axios.get(BASE_URL + `donor/upcoming?search=${value}`);
  //6. add Upcomingdonor fund
  this.UpcomingDonorfund = async (id, body) =>
    await axios.put(BASE_URL + `donor/balance/${id}`, body);
  this.DeleteUpcomingDonorById = async id =>
    await axios.delete(BASE_URL + `donor/${id}`);
}

export default new DonorServices();
