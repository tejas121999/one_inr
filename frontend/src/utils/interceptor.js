import axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";
// import AuthService from "../Redux/Services/DonorServices";


// const axios = require('axios');

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const customAxios = axios.create();


// Step-2: Create request, response & error handlers
const requestHandler = request => {
    
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    request.headers.Authorization = `Bearer ${localStorage.getItem('Token')}`;
    request.headers['Content-type'] = "application/json";  
  
    return request;
};

const responseHandler = response => {
    // const dispatch = useDispatch();

    if (response.status === 401) {
        window.location = '/login';
    }
  

    return response;
};

const errorHandler = error => {
    return Promise.reject(error);
};

// const errorHandler = error => {
//     if (error?.response?.status === 400) {
//         console.log("dfsdfdsds");

//         AuthService
//         .refreshToken( localStorage.getItem('refreshToken'),"AMARDEEP")
//         .then((res) => {
//           localStorage.setItem("username", res.data.username);
//           localStorage.setItem("accessToken", res.data.accessToken);
//           localStorage.setItem("refreshToken", res.data.refreshToken);
  
//           console.log("dfsd",res.data);
  
//         })
//         .catch((error) => {})
//       }
//     console.log("shjcxj",error?.response?.status);
//     return Promise.reject(error);
    
// };

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );


// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;
