import axiosInstance from '../helpers/axios';

export const register = async (data) => {
  await axiosInstance.post('/signup', data)
    .then((res) => console.log(`res: ${res.data}`))
    .catch((err) => console.log(`err: ${err}`));
};

export const login = async (data) => {
  await axiosInstance.post('/auth/login', data)
    .then((res) => console.log(`res: ${res.data}`))
    .catch((err) => console.log(`err: ${err}`));
};
