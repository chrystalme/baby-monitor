import React, { useEffect } from 'react';
import { connect, useDispatch/* , useSelector */ } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setMeasurement } from '../actions/measurement';
import TrackIt from '../components/TrackIt';
import axiosInstance from '../helpers/axios';

const TrackitList = ({ measurements }) => {
  const dispatch = useDispatch();
  // const measurements = useSelector((state) => state.measurements.items[0]);
  // const { items } = measurements;
  // const { attributes } = items;
  // const { value, date } = attributes;

  useEffect(() => {
    axiosInstance.get('/api/v1/measure/1/measurement')
      .then((res) => {
        dispatch(setMeasurement(res.data.data));
        // console.log(res.data.data);
      })
      .catch((err) => err);
  }, []);
  console.log(measurements);
  const measured = measurements.items[0].map((measurement) => (
    <div key={measurement.attributes.id}>
      <h3>{measurement.attributes.value}</h3>
      <h3>{measurement.attributes.date}</h3>
    </div>
  ));

  return (
    <>
      <TrackIt header="Track it" />
      {measured}
    </>
  );
};

const mapStateToProps = (state) => ({
  measurements: state.measurements.items[0],
});

const mapDispatchToProps = (dispatch) => ({
  setMeasurement: (e) => dispatch(setMeasurement(e)),
});

TrackitList.propTypes = {
  measurements: PropTypes.shape({
    items: PropTypes.shape({
      value: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackitList);
