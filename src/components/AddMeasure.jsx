import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import style from '../style/add.module.css';

const AddMeasure = ({
  unit = 'cm',
  header = 'Add Measurement',
  type = 'Head circumference',
  value,
  changeHandler,
  increment,
  decrement,
}) => (
  <>
    <Nav name={header} />
    <>
      <div className={style.valueContainer}>
        <div className={style.itemTop}>
          Add baby
          {' '}
          {' '}
          <strong>{type}</strong>
        </div>
        <div className={style.innerContainer}>
          <div className={style.valuePlace}>
            <input
              type="number"
              name="number"
              onChange={changeHandler}
              value={value}
            />
            {/* {value}
              </input> */}
            <span>{unit}</span>
          </div>
          <div className={style.btnGroup}>
            <button
              onClick={decrement}
                // onClick={() => (value <= 0 ? value : setValue(value - 0.5))}
              className={style.btnSign}
              type="button"
              name="minus"
            >
              -
            </button>
            <button
              onClick={increment}
              // onClick={() => setValue(value + 0.5)}
              className={style.btnSign}
              type="button"
              name="add"
            >
              +
            </button>
          </div>

        </div>
      </div>

    </>

  </>
);
AddMeasure.propTypes = {
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default AddMeasure;
