import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import style from '../style/add.module.css';

const AddMeasureArm = ({
  value = 0,
  unit = 'cm',
  header = 'Add Measurement',
  type = 'Arm Length',
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
          <Link to="/add-measure-3"><button className={style.btnNext} type="button" name="previous">Prev</button></Link>
          <Link to="/add-measure-5">
            <button
              className={style.btnNext}
              type="button"
              name="Next"
            >
              Next
            </button>
          </Link>
        </div>
      </div>

    </div>

    <Footer />
  </>
);

AddMeasureArm.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default AddMeasureArm;
