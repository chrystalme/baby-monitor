import axiosInstance from '../helpers/axios';
import authHeader from './auth-header';

class UserServices {
  getMeasures = () => axiosInstance.get('/measure', { headers: authHeader() })
}

export default new UserServices();
