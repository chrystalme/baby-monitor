import React from 'react';
import axiosInstance from '../helpers/axios';

const Measures = () => {
  const getMeasures = async () => {
    axiosInstance
      .get('/api/v1/measure')
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0].id);
      })
      .catch((err) => err);
    // return response.data;
  };

  getMeasures();

  return (
    <div>
      <h3> Hello</h3>
    </div>
  );
};

export default Measures;
