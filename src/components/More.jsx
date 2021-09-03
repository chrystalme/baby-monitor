import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const More = ({ header = 'More' }) => (
  <>
    <Nav name={header} />
    <Footer />
  </>
);

More.propTypes = {
  header: PropTypes.string.isRequired,
};

export default More;
