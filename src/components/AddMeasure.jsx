import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const AddMeasure = ({ value = 0, header = 'Add Measurement', type = 'Head circumference' }) => (
  <>
    <Nav name={header} />
    <div>
      Add baby
      <strong>{type}</strong>
    </div>
    <div>
      {value}
      {' '}
      cm
    </div>
    <Footer />
  </>
);

AddMeasure.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default AddMeasure;
