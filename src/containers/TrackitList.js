import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { compact } from 'lodash';
import Measurement from '../components/Measurement';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import 'react-circular-progressbar/dist/styles.css';
import TrackItDate from '../components/TrackItDate';
import { readableDate, groupMeasurementByCreatedAt } from '../helpers/utils';
import style from '../style/trackit.module.css';

const TrackitList = () => {
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsPerPages] = useState(1);
  const myData = measurements.measurements;
  const myMeasure = measures.measures;

  const convertedData = myData.map((data) => {
    const newData = {};
    newData.value = data.value;
    newData.user_id = data.user_id;
    newData.measure_id = data.measure_id;
    newData.created_at = readableDate(data.created_at);
    const title = myMeasure
      .filter((measure) => (data.measure_id === measure.id ? measure.title : ''));
    newData.title = title[0].title;
    return (newData);
  });

  console.log(convertedData);
  const result = groupMeasurementByCreatedAt(convertedData, 'created_at');
  // const result2 = groupMeasurementByMeasureId(convertedData, 'measure_id');
  // console.log(result2);

  const dateAndDetails = Object.keys(result);
  // console.log(dateAndDetails);

  const handlePrev = () => (
    currentPage <= 1 ? currentPage : setCurrentPage(currentPage - 1)
  );
  const handleNext = () => (
    currentPage < dateAndDetails.length
      ? setCurrentPage(currentPage + 1)
      : currentPage);

  const listTop = dateAndDetails
    .slice((currentPage * maxItemsPerPages) - maxItemsPerPages, currentPage * maxItemsPerPages)
    .map((measurement) => (
      <TrackItDate
        key={measurement.id}
        createdAt={measurement}
        prev={handlePrev}
        next={handleNext}
      />
    ));
    // value.value
  // console.log(currentPage - 1);
  const listDetails = Object.values(result)[currentPage - 1]
    .map((value) => (
      <Measurement
        key={value.id}
        value={value.value}
        text={value.value}
        title={value.title}
        // title={myMeasure
        // .map((measure) => (value.measure_id === measure.id ? measure.title : ''))}
      />
    ));

  return (
    (
      <>
        <Nav name="Track it" />
        {listTop}
        <div className={style.ringContainer}>
          {listDetails}
        </div>
        <Footer />
      </>
    )

  );
};

export default TrackitList;
