import axiosInstance from '../helpers/axios';
import * as actionTypes from './actionTypes';
// check token and load user

const loadUser = () => (dispatch, getState) => {
  // set loading to true
  dispatch({ type: actionTypes.LOGIN_REQUEST });
  // get Token from localstorage
  const token = getState().auth.idToken;

  // Headers
  const config = {
    headers: {
      mode: 'cor',
      'content-type': 'application/json',
      Authorization: undefined,
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const response = axiosInstance.post('/auth/login', config);
  console.log(response);
};

export default loadUser;
