import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setMeasurement } from '../actions/measurement';
import TrackIt from '../components/TrackIt';
import axiosInstance from '../helpers/axios';

const TrackitList = () => {
  const dispatch = useDispatch();
  const measurements = useSelector((state) => state.measurements);
  console.log(measurements);

  //  Check to see whether the page works now with fetch and dispatch
  const fetchMeasurements = () => {
    axiosInstance.get('/api/v1/measurement')
      .then((res) => {
        const { data } = res.data;
        console.log(data);
        return data;
      })
      .catch((err) => err);
  };

  useEffect(() => {
    dispatch(setMeasurement(fetchMeasurements()));
  }, [measurements.length]);

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

const mapDispatchToProps = () => ({
  setMeasurement,
});

const ConnectedComponent = connect(null, mapDispatchToProps)(TrackitList);

export default ConnectedComponent;
