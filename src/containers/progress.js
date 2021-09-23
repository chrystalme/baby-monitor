import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axiosInstance from '../helpers/axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { setMeasurement } from '../actions/measurement';

const progress = () => {
  const dispatch = useDispatch();
  const getMeasurements = () => {
    axiosInstance
      .get('/api/v1/measurement')
      .then((response) => {
        console.log(response.data);
        dispatch(setMeasurement(response.data));
      })
      .catch((err) => err);
  };

  useEffect(() => {
    getMeasurements();
  }, []);
  return (
    <div>
      <Nav name="My Progress" />
      <Footer />
    </div>
  );
};

export default progress;
