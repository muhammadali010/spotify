import axios from "axios";
import { getToken } from "./utils/utils";

const http = axios.create({
    baseURL: "https://api.spotify.com/v1/browse/"
})

http.interceptors.request.use(config => {
   const authToken = localStorage.getItem("token");
   if(authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
   } else {
    getToken();
   }
   return config;
});

// http.interceptors.response.use(
//     response => response,
//     error => {
//         if(error.response ? error.response.status : null) {
//             localStorage.removeItem("token");
//             window.location.href = "/login";
//         } else if(status == 401) {
//             localStorage.removeItem("token");
//             window.location.href = "/login";
//         } else {
//             console.log(error.message);
//         }
//         return Promise.reject(error);
//     }
// )

export default http;