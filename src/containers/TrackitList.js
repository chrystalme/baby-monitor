import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { setMeasurement } from '../actions/measurement';
import axiosInstance from '../helpers/axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const TrackitList = () => {
  const dispatch = useDispatch();
  const measurements = useSelector((state) => state.measurements);
  useEffect(() => {
    axiosInstance.get('/api/v1/measurement')
      .then((res) => {
        const { data } = res.data;
        dispatch(setMeasurement(data));
      })
      .catch((err) => err);
  }, [measurements.length]);
  console.log(measurements);

  return (
    <>
      <Nav name="Track it" />
      <Footer />
    </>
  );
};

// TrackitList.propTypes = {
//   measurements: PropTypes.shape({
//     items: PropTypes.shape({
//       value: PropTypes.number.isRequired,
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

// const mapDispatchToProps = () => ({
//   setMeasurement,
// });

// const ConnectedComponent = connect(null, mapDispatchToProps)(TrackitList);

export default TrackitList;
