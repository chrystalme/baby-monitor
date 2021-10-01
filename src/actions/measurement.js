import { GET_MEASUREMENT, SET_MEASUREMENT } from './actionTypes';

export const setMeasurement = (measurement) => ({
  type: SET_MEASUREMENT,
  payload: measurement,
});

export const getMeasurement = (measureId,
  value,
  userId) => ({
  type: GET_MEASUREMENT,
  measureId,
  value,
  userId,
});
