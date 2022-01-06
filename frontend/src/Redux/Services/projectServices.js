import axios from '../../../src/utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function projectServices() {
  //   Create project

  this.createProject = async body =>
    await axios.post(BASE_URL + 'projects/create', body);
  this.getAllProject = async body => await axios.get(BASE_URL + 'auth');
  this.getProjectByID = async id => await axios.get(BASE_URL + 'auth');

  this.getAllCompletedProject = async () =>
    await axios.get(BASE_URL + 'get-completed-projects');
  this.getCompletedProjectByValue = async value =>
    await axios.get(BASE_URL + `get-completed-projects/?search=${value}`);

  this.getAllArchivedProject = async () => await axios.get(BASE_URL + 'auth');
}

export default new projectServices();
