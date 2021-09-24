import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import 'react-circular-progressbar/dist/styles.css';
import TrackItDate from '../components/TrackItDate';

const TrackitList = () => {
  const measurements = useSelector((state) => state.measurements);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsPerPages] = useState(1);
  const myData = measurements.measurements;

  const handlePrev = () => (
    currentPage <= 1 ? currentPage : setCurrentPage(currentPage - 1)
  );
  const handleNext = () => (
    currentPage < myData.length
      ? setCurrentPage(currentPage + 1)
      : currentPage);

  const listTop = myData
    .slice((currentPage * maxItemsPerPages) - maxItemsPerPages, currentPage * maxItemsPerPages)
    .map((measurement) => {
      const date = new Date(measurement.attributes.created_at);
      const convertedDate = date.toDateString();
      return (
        <TrackItDate
          key={measurement.id}
          createdAt={convertedDate}
          prev={handlePrev}
          next={handleNext}
          value={measurement.attributes.value}
          text={measurement.attributes.value}
        />
      );
    });
  return (
    (
      <>
        <Nav name="Track it" />
        {listTop}
        <Footer />
      </>
    )

  );
};

// const mapDispatchToProps = () => ({
//   setMeasurement,
// });

// const ConnectedComponent = connect(null, mapDispatchToProps)(TrackitList);

export default TrackitList;
