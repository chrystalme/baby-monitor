import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setMeasurement } from '../actions/measurement';
import TrackIt from '../components/TrackIt';
import axiosInstance from '../helpers/axios';

const TrackitList = () => {
  const dispatch = useDispatch();
  const measurements = useSelector((state) => state.measurements);

  useEffect(() => {
    axiosInstance.get('/api/v1/measure/1/measurement')
      .then((res) => {
        dispatch(setMeasurement(res.data.data));
        // console.log(res.data.data);
      })
      .catch((err) => err);
  }, []);
  console.log(measurements);

  return (
    <>
      <TrackIt header="Track it" />
    </>
  );
};

TrackitList.propTypes = {
  measurements: PropTypes.shape({
    items: PropTypes.shape({
      value: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TrackitList;
