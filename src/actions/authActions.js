import axiosInstance from '../helpers/axios';
import * as actionTypes from './actionTypes';
import { returnErrors } from './errorActions';

export const registerUser = (user) => (dispatch) => {
  axiosInstance
    .post('/signup', user)
    .then((response) => {
      localStorage.setItem('user_token', JSON.stringify(response.data.auth_token));
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        user: response.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
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
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const logout = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
  payload: {
    measure: null,
    measurement: null,
    user: null,
    error: null,
  },
});

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
    }).catch((err) => { dispatch(returnErrors(err.response.data, err.response.status)); });
};
