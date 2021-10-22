import React from 'react';
import { useSelector } from 'react-redux';
import { groupMeasurementByMeasureId, convertedData } from '../helpers/utils';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Example from './chart';

const progress = () => {
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);
  const myData = measurements.measurements;
  const myMeasure = measures.measures;

  const result = (groupMeasurementByMeasureId(convertedData(myData, myMeasure), 'title'));

  const dataBody = [];
  for (let i = 0; i < Object.keys(result).length; i += 1) {
    const title = Object.keys(result)[i];
    dataBody.push(
      <h4>
        <strong key={i}>
          {title}
        </strong>
      </h4>,
    );

    Object.values(result)[i]
      .map((values) => dataBody.push(
        <>
          <span>
            {`${values.created_at} : ${values.value}`}
            {' '}
          </span>
          <br />
        </>,
      ));
  }

  return (
    <div>
      <Nav name="My Progress" />
      <div style={{ marginTop: '4rem' }}>
        <Example />
      </div>
      <Footer />
    </div>
  );
};

export default progress;
