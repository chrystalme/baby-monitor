import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import style from '../style/add.module.css';

const AddMeasure = ({
  unit = 'cm',
  header = 'Add Measurement',
  type = 'Head circumference',
}) => {
  const [value, setValue] = useState(0);
  return (
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
            <h4 contentEditable suppressContentEditableWarning>{value}</h4>
            <span>{unit}</span>
          </div>
          <div className={style.btnGroup}>
            <button onClick={() => (value <= 0 ? value : setValue(value - 0.5))} className={style.btnSign} type="button" name="minus">-</button>
            <button onClick={() => setValue(value + 0.5)} className={style.btnSign} type="button" name="add">+</button>
          </div>
          <div className={style.btnGroup}>
            <button disabled className={style.btnNext} type="button" name="previous">Prev</button>
            <Link to="/add-measure-2">
              {' '}
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
};

AddMeasure.propTypes = {
  // value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default AddMeasure;
