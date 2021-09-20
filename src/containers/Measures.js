import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axiosInstance from '../helpers/axios';
import AddMeasure from '../components/AddMeasure';
import { getMeasures } from '../actions/actionTypes';
import style from '../style/add.module.css';
import Footer from '../components/Footer';
import { getMeasurement } from '../actions/measurement';

const Measures = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsPerPages] = useState(1);
  const [value, setValue] = useState(0);
  const measures = useSelector((state) => state.measures.measures);
  const measurements = useSelector((state) => state.measurements);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  console.log(measurements.items);

  if (!isAuthenticated) {
    return (<Redirect to="/login" />);
  }
  const handleValueChange = (e) => {
    if (value) {
      setValue(parseFloat(e.target.value));
    } else {
      setValue(parseFloat(e.target.value));
    }
  };
  const decrement = () => {
    if (value <= 0) {
      return value;
    }
    return setValue(value - 0.5);
  };
  const increment = () => setValue(value + 0.5);

  useEffect(() => {
    axiosInstance
      .get('/api/v1/measure')
      .then((response) => {
        dispatch(getMeasures(response.data.data));
        // console.log(response.data.data);
      })
      .catch((err) => err);
  }, [measures.length]);

  // useEffect(() => {
  //   dispatch(getMeasurement(value));
  //   return () => {
  //     setValue(0);
  //   };
  // }, []);

  const list = measures
    .slice((currentPage * maxItemsPerPages) - maxItemsPerPages, currentPage * maxItemsPerPages)
    .map((measure) => (
      <div key={measure.attributes.title}>
        {console.log(measure.id)}
        <AddMeasure
          header="Add Measurement"
          unit={measure.attributes.unit}
          type={measure.attributes.title}
          value={value}
          increment={increment}
          decrement={decrement}
          changeHandler={handleValueChange}
        />
        <div className={style.btnGroup}>
          <button
            disabled
            className={style.btnNext}
            type="button"
            name="Previous"
            onClick={() => (
              currentPage <= 1
                ? currentPage
                : setCurrentPage(currentPage - 1))}
          >
            Prev
          </button>
          {' '}
          { currentPage === measures.length
            ? (<button className={style.btnNext} type="button" onClick={() => { dispatch(getMeasurement(measure.id, value)); setValue(0); }} name="Submit">Submit</button>)
            : (
              <button
                className={style.btnNext}
                type="button"
                name="Next"
                onClick={() => {
                  dispatch(getMeasurement(measure.id, value));
                  setValue(0);
                  return (
                    currentPage < measures.length
                      ? setCurrentPage(currentPage + 1)
                      : currentPage);
                }}
              >
                Next
              </button>
            )}

        </div>
        <Footer />
      </div>

    ));

  return (
    <>{list}</>
  );
};

const ConnectedComponent = connect()(Measures);

export default ConnectedComponent;
