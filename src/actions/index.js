import * as actionTypes from './actionTypes';

// const initialState = {
//   idToken: localStorage.getItem('id_token'),
//   isAuthenticated: null,
//   isLoading: false,
//   user: null,
// };

export const requestLogin = () => ({
  type: actionTypes.LOGIN_REQUEST,
  isLoading: true,
});

export const getLoginDetails = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  isLoading: false,
  isAuthenticated: true,
  user: data,
});

export const getReg = (data) => ({
  type: actionTypes.REGISTER_SUCCESS,
  isLoading: false,
  isAuthenticated: false,
  user: data,
  idToken: localStorage.setItem({ token: data.idToken }),
});
