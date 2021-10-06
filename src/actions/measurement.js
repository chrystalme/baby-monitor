import axiosInstance from '../helpers/axios';
import { GET_MEASUREMENT, SET_MEASUREMENT } from './actionTypes';
import { returnErrors } from './errorActions';

export const setMeasurement = () => (dispatch) => {
  axiosInstance
    .get('/api/v1/measurement')
    .then((response) => {
      const { data } = response;
      dispatch({
        type: SET_MEASUREMENT,
        payload: data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const getMeasurement = (data) => (dispatch) => {
  axiosInstance
    .post('/api/v1/measurement/', data)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_MEASUREMENT,
        payload: {
          measure_id: data.measure_id,
          value: data.value,
        },
      });
    }).catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
