import React, { useEffect } from 'react';
import Progress from '../components/Progress';
import axiosInstance from '../helpers/axios';

const progress = () => {
  const getMeasurements = () => {
    axiosInstance
      .get('/api/v1/measure/1/measurement')
      .then((response) => console.log(response.data))
      .catch((err) => err);
  };

  useEffect(() => {
    getMeasurements();
  }, []);
  return (
    <div>
      Hello from progress
      <Progress header="Your Progress" />
    </div>
  );
};

export default progress;
