import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Measurement from '../components/Measurement';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import 'react-circular-progressbar/dist/styles.css';
import TrackItDate from '../components/TrackItDate';
import { convertedData, groupMeasurementByCreatedAt } from '../helpers/utils';
import style from '../style/trackIt.module.css';
import { setMeasurement } from '../actions/measurement';
import axiosInstance from '../helpers/axios';

const TrackItList = () => {
  const measurements = useSelector((state) => state.measurements);
  const measures = useSelector((state) => state.measures);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsPerPages] = useState(1);
  // guard against undefined store slices so helpers always receive arrays
  const myData = measurements?.measurements ?? [];
  const myMeasure = measures?.measures ?? [];

  const dispatch = useDispatch();

  const setMeasurements = () => {
    axiosInstance
      .get('/api/v1/measurement')
      .then((response) => {
        const { data } = response;
        dispatch(setMeasurement(data));
      })
      .catch((err) => err);
  };
  // fetch once on mount (or change to a safe dependency)
  useEffect(() => {
    setMeasurements();
  }, []);

  const result = groupMeasurementByCreatedAt(
    convertedData(myData, myMeasure),
    'created_at',
  ) || {};

  const dateAndDetails = Object.keys(result);
  const handlePrev = () => (currentPage <= 1 ? currentPage : setCurrentPage(currentPage - 1));
  const handleNext = () => (currentPage < dateAndDetails.length
    ? setCurrentPage(currentPage + 1)
    : currentPage);

  const listTop = dateAndDetails === undefined ? (
    <span>No data here yet !!!</span>
  ) : (
    dateAndDetails
      .slice(
        currentPage * maxItemsPerPages - maxItemsPerPages,
        currentPage * maxItemsPerPages,
      )
      .map((measurement) => (
        <TrackItDate
          key={measurement}
          createdAt={measurement}
          prev={handlePrev}
          next={handleNext}
        />
      ))
  );
  const dataDetails = Object.values(result)[currentPage - 1];

  // only keep the latest measurement for each measure (keyed by title) for the day
  const latestPerMeasure = (() => {
    const details = dataDetails || [];
    const map = details.reduce((acc, item) => {
      const key = item.title || item.unit || item.id;
      const existing = acc[key];
      const itemTime = item.created_at
        ? new Date(item.created_at).getTime()
        : 0;
      const existingTime = existing && existing.created_at
        ? new Date(existing.created_at).getTime()
        : 0;
      if (!existing || itemTime >= existingTime) {
        acc[key] = item;
      }
      return acc;
    }, {});
    return Object.values(map);
  })();

  const listDetails = latestPerMeasure.length === 0 ? (
    <span>No data!!!</span>
  ) : (
    latestPerMeasure.map((value) => (
      <Measurement
        key={value.id}
        value={value.value}
        text={value.value}
        title={value.title}
        unit={value.unit}
      />
    ))
  );

  return (
    <>
      <Nav name="Track it" />
      {listTop}
      <div className={style.ringContainer}>{listDetails}</div>
      <Footer />
    </>
  );
};

export default TrackItList;
