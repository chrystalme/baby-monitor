import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import style from '../style/trackit.module.css';
import 'react-circular-progressbar/dist/styles.css';
import '../index.css';

const Measurement = ({ value }) => (
  <div className={style.circularRing}>
    <CircularProgressbar
      value={value}
      text={value}
    />

  </div>
);

Measurement.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Measurement;
