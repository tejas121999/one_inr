import axios from '../../utils/interceptor'
import { BASE_URL } from '../../utils/ApiEndpoint'
import profileServices from './profileServices'

function contactServices() {
    // post messages
    this.postMessage = async body => await axios.post(BASE_URL + '', body)
}
export default new contactServices