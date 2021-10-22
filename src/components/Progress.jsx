import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ measurement }) => {
  console.log(measurement);
};
(
  <div style={{ marginTop: '4rem' }}>
    {/* <h4>{measurement.Feet}</h4> */}
  </div>

);

Progress.propTypes = {
  measurement: PropTypes.shape({
    Feet: PropTypes.string.isRequired,
  }).isRequired,
};

export default Progress;
