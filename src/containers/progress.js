import React from 'react';
import { useSelector } from 'react-redux';
// import {
//   BarChart, Bar, /* Cell, */ XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
// } from 'recharts';
import { groupMeasurementByMeasureId, convertedData } from '../helpers/utils';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const progress = () => {
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);
  const myData = measurements.measurements;
  const myMeasure = measures.measures;

  const result = (groupMeasurementByMeasureId(convertedData(myData, myMeasure), 'measure_id'));
  console.log(result);
  // const charts = result.map((chart) => (
  //   console.log(chart)
  //   // <ResponsiveContainer key={chart.title}>
  //   //   <BarChart
  //   //     width={500}
  //   //     height={300}
  //   //     data={chart}
  //   //     margin={{
  //   //       top: 20,
  //   //       right: 30,
  //   //       left: 20,
  //   //       bottom: 5,
  //   //     }}
  //   //   >
  //   //     <CartesianGrid strokeDasharray="3 3" />
  //   //     <XAxis dataKey="title" />
  //   //     <YAxis dataKey="value" />
  //   //     <Tooltip />
  //   //     <Legend />
  //   //     <Bar dataKey="value" stackId="1" fill="#8884d8" />
  //   //     <Bar dataKey="value" stackId="2" fill="#82ca9d" />
  //   //   </BarChart>
  //   // </ResponsiveContainer>
  // ));
  return (
    <div>
      <Nav name="My Progress" />
      {/* {charts} */}
      <Footer />
    </div>
  );
};

export default progress;
