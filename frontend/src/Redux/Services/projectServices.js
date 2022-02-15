import axios from '../../../src/utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function projectServices() {
  //   Create project

  this.createProject = async body =>
    await axios.post(BASE_URL + 'projects', body);
  this.getAllProject = async value => await axios.get(BASE_URL + `projects/?search=${value}`);
  this.getProjectByID = async id => await axios.get(BASE_URL + `projects/${id}`);
  this.updateProject = async id => await axios.put(BASE_URL + '#', id);
  this.updateCommition = async id => await axios.put(BASE_URL + '#', id);
  this.addFund = async id => await axios.put(BASE_URL + '#', id);

  this.getAllCompletedProject = async () =>
    await axios.get(BASE_URL + 'projects/completed');
  this.getCompletedProjectByValue = async value =>
    await axios.get(BASE_URL + `completed/?search=${value}`);

  this.getAllArchivedProject = async () => await axios.get(BASE_URL + '#');
}

export default new projectServices();
