import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const headers = {};
console.log(`BaseUrl: ${baseURL}`);
if (localStorage.token) {
  headers.Authorization = localStorage.token;
}

const axiosInstance = axios.create(
  {
    baseURL,
    headers,
  },
);

export default axiosInstance;
