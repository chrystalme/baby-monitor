import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Measurement from '../components/Measurement';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import 'react-circular-progressbar/dist/styles.css';
import TrackItDate from '../components/TrackItDate';
import { convertedData, groupMeasurementByCreatedAt } from '../helpers/utils';
import style from '../style/trackit.module.css';

const TrackitList = () => {
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsPerPages] = useState(1);
  const myData = measurements.measurements;
  const myMeasure = measures.measures;

  const result = groupMeasurementByCreatedAt(convertedData(myData, myMeasure), 'created_at');

  const dateAndDetails = Object.keys(result);

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
  const listDetails = Object.values(result)[currentPage - 1]
    .map((value) => (
      <Measurement
        key={value.id}
        value={value.value}
        text={value.value}
        title={value.title}
        unit={value.unit}
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
