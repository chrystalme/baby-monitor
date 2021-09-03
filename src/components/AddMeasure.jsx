import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import style from '../style/add.module.css';

const AddMeasure = ({ value = 0, header = 'Add Measurement', type = 'Head circumference' }) => (
  <>
    <Nav name={header} />
    <div className={style.container}>
      <div className={style.itemTop}>
        Add baby
        {' '}
        {' '}
        <strong>{type}</strong>
      </div>
      <div className={style.valuePlace}>
        <span>
          <input type="number" name={type} value={value} />
          {' '}
          cm
        </span>

      </div>
      <div>
        <button type="button" name="add">+</button>
        <button type="button" name="minus">-</button>
      </div>
      <div>
        <button type="button" name="previous">Prev</button>
        <button type="button" name="Next">Next</button>
      </div>
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
