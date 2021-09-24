import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../helpers/axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { setMeasurement } from '../actions/measurement';

const progress = () => {
  const dispatch = useDispatch();
  const measurements = useSelector((state) => state.measurements);
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
