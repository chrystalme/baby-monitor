import axiosInstance from '../helpers/axios';
import * as actionTypes from './actionTypes';

export const registerUser = (user) => (dispatch) => {
  axiosInstance
    .post('/signup', user)
    .then((response) => {
      localStorage.setItem('user_token', JSON.stringify(response.data));
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        user: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.REGISTER_FAILURE,
        payload: err,
      });
    });
};

export const loginUser = (user) => (dispatch) => {
  axiosInstance
    .post('/auth/login', user)
    .then((response) => {
      localStorage.setItem('user_token', JSON.stringify(response.data.auth_token));
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });
    }).catch((err) => {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
  });

  const userToken = localStorage.getItem('user_token');
  if (userToken) {
    localStorage.removeItem('user_token');
  }
};

export const returningUser = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGGED_IN,
  });
};

export const getUser = () => (dispatch) => {
  axiosInstance
    .get('/user_info')
    .then((response) => {
      dispatch({
        type: actionTypes.GET_USER,
        payload: response.data.data,
      });
    }).catch((err) => err);
};
