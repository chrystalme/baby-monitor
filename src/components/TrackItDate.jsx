import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import style from '../style/trackit.module.css';

const TrackItDate = ({
  createdAt, prev, next, value,
}) => (
  <>
    <div className={style.container}>
      <div className={style.itemTop}>
        <button type="button" onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <span>
          {createdAt}
        </span>
        <button type="button" onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div className={style.circularRing}>
      <CircularProgressbar value={value} text={value} />
    </div>
  </>
);

TrackItDate.propTypes = {
  createdAt: PropTypes.string.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default TrackItDate;
