import React from 'react';
import { useSelector } from 'react-redux';
import { getMeasurements, groupMeasurementByMeasureId } from '../helpers/utils';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const progress = () => {
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);

  console.log(measurements);
  console.log(measures);
  console.log(getMeasurements(measures, measurements));
  console.log(groupMeasurementByMeasureId(measurements, 'measure_id'));

  return (
    <div>
      <Nav name="My Progress" />

      <Footer />
    </div>
  );
};

export default progress;
