import React from 'react';
import { PropTypes } from 'prop-types';

const Measurement = ({ value }) => (
  <>
    <h3>{value}</h3>

  </>
);

Measurement.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Measurement;
