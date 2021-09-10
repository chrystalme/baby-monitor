import * as actionTypes from './actionTypes';
import AuthService from '../services/auth.service';

export const register = (name, email, password) => (dispatch) => AuthService
  .register(name, email, password)
  .then((response) => {
    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
    });
    dispatch({
      type: actionTypes.GET_MEASUREMENT,
      payload: response.data.measurement,
    });
    return Promise.resolve();
  },
  (error) => {
    const message = (error.response
        && error.response.data && error.response.data.message) || error.message
        || error.toString();

    dispatch({
      type: actionTypes.REGISTER_FAILURE,
    });
    dispatch({
      type: actionTypes.SET_MEASUREMENT,
      payload: message,
    });
    return Promise.reject();
  });

export const login = (email, password) => (dispatch) => AuthService.login(email, password)
  .then((data) => {
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: { user: data },
    });
    return Promise.resolve();
  },
  (error) => {
    const message = (error.response
        && error.response.data && error.response.data.message) || error.message
        || error.toString();

    dispatch({
      type: actionTypes.LOGIN_FAILURE,
    });
    dispatch({
      type: actionTypes.SET_MEASUREMENT,
      payload: message,
    });
    return Promise.reject();
  });

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: actionTypes.LOGOUT_SUCCESS,
  });
};
