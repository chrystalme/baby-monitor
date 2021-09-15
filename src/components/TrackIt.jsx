import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import Nav from './Nav';
import Footer from './Footer';
import style from '../style/trackit.module.css';
import 'react-circular-progressbar/dist/styles.css';

const TrackIt = ({ header = 'Track.it'/* value */ }) => (
  <>
    <Nav name={header} />
    <div className={style.container}>
      <div className={style.itemTop}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>7 September, 2021</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div className={style.circularRing}>
        <CircularProgressbar value="2.78" text="2.78" maxValue="10" counterClockwise />
        <CircularProgressbar value="8" text="8" maxValue="10" counterClockwise />
        <CircularProgressbar value="2.78" text="2.78" maxValue="10" counterClockwise />
      </div>
    </div>
    <Footer />
  </>
);

TrackIt.propTypes = {
  header: PropTypes.string.isRequired,
};

export default TrackIt;
