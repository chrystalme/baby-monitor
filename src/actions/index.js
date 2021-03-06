import * as actionTypes from './actionTypes';

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
