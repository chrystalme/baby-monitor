export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const requestLogin = (userCreds) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  user: userCreds,
});

export const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
});

export const loginError = (message) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
});

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const requestLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true,
});

export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
});

// Get Resources measure and Measurement
export const GET_MEASUREMENT = 'GET_MEASUREMENT';
export const SET_MEASUREMENT = 'SET_MEASUREMENT';

export const getMeasurement = (data) => ({
  type: GET_MEASUREMENT,
  payload: data,
});

export const setMeasurement = (data) => ({
  type: SET_MEASUREMENT,
  payload: data,
});
