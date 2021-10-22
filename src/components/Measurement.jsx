import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import style from '../style/trackit.module.css';
import '../index.css';
import 'react-circular-progressbar/dist/styles.css';

const Measurement = ({ value, title, unit }) => (
  <div className={style.circularRing}>
    <CircularProgressbar
      value={value}
      text={value}
    />
    <span style={{ textAlign: 'center', fontSize: 'small' }}>
      {title}
      {' '}
      -
      {' '}
      {unit}
    </span>
  </div>
);

Measurement.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Measurement;
