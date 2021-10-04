import axiosInstance from '../helpers/axios';
import { GET_MEASUREMENT, SET_MEASUREMENT } from './actionTypes';
import { returnErrors } from './errorActions';

export const setMeasurement = (measurement) => ({
  type: SET_MEASUREMENT,
  payload: measurement,
});

export const getMeasurement = (measureId, value) => (dispatch) => {
  axiosInstance
    .post('/api/v1/measurement/')
    .then((response) => {
      dispatch({
        type: GET_MEASUREMENT,
        payload: response(JSON.parse(measureId, value)),

      });
    }).catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
