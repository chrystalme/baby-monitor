import axiosInstance from '../helpers/axios';

// eslint-disable-next-line import/prefer-default-export
export const register = () => {
  axiosInstance.post('/signup', {})
    .then((res) => console.log(`res: ${res}`))
    .catch((err) => console.log(`err: ${err}`));
};
