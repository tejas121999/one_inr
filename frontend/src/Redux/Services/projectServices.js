import axios from '../../../src/utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';

function projectServices() {
  //   Create project

  this.createProject = async body =>
    await axios.post(BASE_URL + 'projects/create', body);
  this.getAllProject = async () => await axios.get(BASE_URL + 'projects/get-project');
  this.getProjectByID = async id => await axios.get(BASE_URL + `projects/get-project/${id}`);
  this.updateProject = async id => await axios.put(BASE_URL + '', id);
  this.updateCommition = async id => await axios.put(BASE_URL + '#', id);
  this.addFund = async id => await axios.put(BASE_URL + '#', id);

  this.getAllCompletedProject = async () =>
    await axios.get(BASE_URL + 'get-completed-projects');
  this.getCompletedProjectByValue = async value =>
    await axios.get(BASE_URL + `get-completed-projects/?search=${value}`);

  this.getAllArchivedProject = async () => await axios.get(BASE_URL + 'auth');
}

export default new projectServices();
