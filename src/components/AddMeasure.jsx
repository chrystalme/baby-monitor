import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const AddMeasure = ({ value = 0, type = 'Head circumference' }) => (
  <div>
    <Nav name={type} />
    <div>
      Add baby
      <strong>{type}</strong>
    </div>
    <div>{value}</div>
  </div>
);

AddMeasure.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default AddMeasure;
