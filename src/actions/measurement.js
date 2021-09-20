import { GET_MEASUREMENT, SET_MEASUREMENT } from './actionTypes';

export const setMeasurement = (measurement) => ({
  type: SET_MEASUREMENT,
  payload: measurement,
});
export const getMeasurement = (measurement) => ({
  type: GET_MEASUREMENT,
  payload: measurement,
});
