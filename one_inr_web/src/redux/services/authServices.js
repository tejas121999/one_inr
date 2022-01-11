import axios from '../../utils/interceptor'
import { BASE_URL } from '../../utils/ApiEndpoint'

function AuthService() {
    // login
    this.LoginAuth = async body => await axios.post(BASE_URL + '#', body)

    // register
    this.RegisterAuth = async body => await axios.post(BASE_URL + '#', body)

    // forgot password
    this.ForgotPassword = async body => await axios.post(BASE_URL + '#', body)

}

export default new AuthService();