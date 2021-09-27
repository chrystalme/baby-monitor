import React from 'react';
import Measurement from './Measurement';

const TrackitDetails = ({ measurements }) => {
  (
    measurements.map((measurement) => (
      <Measurement
        key={measurement.id}
        value={measurement.value}
      />
    ))
  );
};

export default TrackitDetails;
