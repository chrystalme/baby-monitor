import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import Nav from './Nav';
import Footer from './Footer';

const TrackIt = ({ header = 'Track.it' }) => (
  <>
    <Nav name={header} />
    <div>

      <CircularProgressbar value="2.78" counterClockwise />
    </div>
    <Footer />
  </>
);

TrackIt.propTypes = {
  header: PropTypes.string.isRequired,
};

export default TrackIt;
