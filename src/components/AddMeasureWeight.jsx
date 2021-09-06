import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import style from '../style/add.module.css';

const AddMeasureWeight = ({
  value = 0,
  unit = 'kg',
  header = 'Add Measurement',
  type = 'Weight',
}) => (
  <>
    <Nav name={header} />
    <div className={style.container}>
      <div className={style.itemTop}>
        Add baby
        {' '}
        {' '}
        <strong>{type}</strong>
      </div>
      <div className={style.valueContainer}>
        <div className={style.valuePlace}>
          <h4>{value}</h4>
          <span>{unit}</span>
        </div>
        <div className={style.btnGroup}>
          <button className={style.btnSign} type="button" name="add">-</button>
          <button className={style.btnSign} type="button" name="minus">+</button>
        </div>
        <div className={style.btnGroup}>
          <button className={style.btnNext} type="button" name="previous">Prev</button>
          <button
            className={style.btnNext}
            type="button"
            name="Next"

          >
            Next
          </button>
        </div>
      </div>

    </div>

    <Footer />
  </>
);

AddMeasureWeight.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default AddMeasureWeight;
