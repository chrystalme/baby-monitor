import React from 'react';
import TrackIt from './TrackIt';

const TrackitMap = ({ measurements }) => {
  (
    measurements.measurements.map((measurement) => (
      <TrackIt
        key={measurement.id}
        createdAt={measurement.created_at}
      />
    ))
  );
};

export default TrackitMap;
