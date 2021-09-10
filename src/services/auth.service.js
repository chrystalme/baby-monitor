import axiosInstance from '../helpers/axios';

class AuthService {
   login = async (email, password) => {
     const response = await axiosInstance
       .post('/auth/login', { email, password });
     if (response.data.auth_token) {
       localStorage.setItem('user_token', JSON.stringify(response.data));
     }
     return response.data;
   }

   logout = () => {
     localStorage.removeItem('user_token');
   }

   register = (name, email, password) => axiosInstance.post('/signup', { name, email, password })
}

export default new AuthService();
