import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const headers = {};
console.log(`BaseUrl: ${baseURL}`);
if (localStorage.user_token) {
  headers.Authorization = localStorage.user_token;
}

const axiosInstance = axios.create(
  {
    baseURL,
    headers,
  },
);

export default axiosInstance;
