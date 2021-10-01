import React from 'react';
import {
  BarChart, Bar, /* , Cell, */ XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    title: 'Head Circumference',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    title: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    title: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    title: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    title: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    title: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    title: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Example = () => (
  <ResponsiveContainer width="100%" aspect={4}>
    <BarChart width={150} height={40} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default Example;
