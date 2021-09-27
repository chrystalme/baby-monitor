import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../helpers/axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import { mergeMeasureWithMeasurement } from '../helpers/utils';
import { setMeasurement } from '../actions/measurement';

const progress = () => {
  const dispatch = useDispatch();
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);

  const mergedObject = (measurements, measures) => {
    for (let index = 0; index < measurements.length; index += 1) {
      const item = measurements[index];
      for (let index = 0; index < measures.length; index += 1) {
        const element = measures[index];
        if (element.id === item.measure_id) {
          measurements.concat(measures);
        }
      }
    }
  };

  console.log(mergedObject(measurements, measures));
  // console.log(mergeMeasureWithMeasurement(measurements, measures, customizer));
  console.log(measurements);
  const setMeasurements = () => {
    axiosInstance
      .get('/api/v1/measurement')
      .then((response) => {
        const { data } = response.data;
        dispatch(setMeasurement(data));
      })
      .catch((err) => err);
  };

  useEffect(() => {
    setMeasurements();
  }, []);
  return (
    <div>
      <Nav name="My Progress" />

      <Footer />
    </div>
  );
};

export default progress;
