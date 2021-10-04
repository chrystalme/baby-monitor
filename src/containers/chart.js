import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart, Bar, /* , Cell, */ XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { convertedData, groupMeasurementByMeasureId } from '../helpers/utils';

const Example = () => {
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);
  const myData = measurements.measurements;
  const myMeasure = measures.measures;

  const result = (groupMeasurementByMeasureId(convertedData(myData, myMeasure), 'title'));
  // console.log(Object.entries(result));
  const getObj = () => {
    const data = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(result)) {
      const newObj = {};
      newObj.title = key;
      // eslint-disable-next-line no-return-assign
      value.map((val, i) => (newObj[`value${i}`] = val.value));
      value.reduce((val, i) => val + i);
      data.push(newObj);
    }
    return data;
  };
  // console.log(getObj());
  const data = getObj();
  // console.log(data);
  return (
    <ResponsiveContainer width="100%" aspect={0.9}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value0" stackId="a" fill="#8884d8" />
        <Bar dataKey="value1" stackId="a" fill="#82ca9d" />
        <Bar dataKey="value2" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
