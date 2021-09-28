import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import style from '../style/trackit.module.css';
import '../index.css';
import 'react-circular-progressbar/dist/styles.css';

const Measurement = ({ value, title }) => (
  <div className={style.circularRing}>
    <CircularProgressbar
      value={value}
      text={value}
    />
    <span style={{ textAlign: 'center' }}>{title}</span>

  </div>
);

Measurement.propTypes = {
  value: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  title: PropTypes.array.isRequired,
};

export default Measurement;
