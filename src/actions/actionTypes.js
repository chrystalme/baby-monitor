export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const GET_MEASUREMENT = 'GET_MEASUREMENT';
export const GET_MEASURE = 'GET_MEASURE';
export const SET_MEASUREMENT = 'SET_MEASUREMENT';
export const LOGGED_IN = 'LOGGED_IN';
export const GET_USER = 'GET_USER';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';

export const getMeasures = (measure) => ({
  type: GET_MEASURE,
  payload: measure,
});
