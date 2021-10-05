import axiosInstance from '../helpers/axios';
import { GET_MEASUREMENT, SET_MEASUREMENT } from './actionTypes';
import { returnErrors } from './errorActions';

export const setMeasurement = (measurement) => ({
  type: SET_MEASUREMENT,
  payload: measurement,
});

export const getMeasurement = (data) => (dispatch) => {
  axiosInstance
    .post('/api/v1/measurement/', data)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_MEASUREMENT,
        payload: response.data,

      });
    }).catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
