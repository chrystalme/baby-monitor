import React/* , { useEffect } */ from 'react';
import { /* useDispatch, */useSelector } from 'react-redux';
import { getMeasurements } from '../helpers/utils';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const progress = () => {
  // const dispatch = useDispatch();
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);

  console.log(measurements);
  console.log(measures);
  console.log(getMeasurements(measures, measurements));
  // const setMeasurements = () => {
  //   axiosInstance
  //     .get('/api/v1/measurement')
  //     .then((response) => {
  //       const { data } = response.data;
  //       dispatch(setMeasurement(data));
  //     })
  //     .catch((err) => err);
  // };

  // useEffect(() => {
  //   setMeasurements();
  // }, []);
  return (
    <div>
      <Nav name="My Progress" />

      <Footer />
    </div>
  );
};

export default progress;
