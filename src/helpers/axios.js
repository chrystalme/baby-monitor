import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;
const headers = {};
if (localStorage.user_token) {
  headers.Authorization = `Bearer ${JSON.parse(localStorage.user_token)}`;
}
const axiosInstance = axios.create(
  {
    baseURL,
    headers,
  },
);

export default axiosInstance;
