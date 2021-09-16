import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const Progress = ({ header }) => (
  <div>
    <Nav name={header} />
    <Footer />
  </div>
);

Progress.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Progress;
