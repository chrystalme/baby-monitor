import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import axiosInstance from '../helpers/axios';
import AddMeasure from '../components/AddMeasure';
import { getMeasures } from '../actions/actionTypes';
import style from '../style/add.module.css';
import Footer from '../components/Footer';

const Measures = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxItemsPerPages] = useState(1);
  const measures = useSelector((state) => state.measures.measures);
  const isActive = useSelector((state) => state.measures.isActive);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  console.log(isActive);
  console.log(isAuthenticated);

  useEffect(() => {
    axiosInstance
      .get('/api/v1/measure')
      .then((response) => {
        dispatch(getMeasures(response.data.data));
        // console.log(response.data.data);
      })
      .catch((err) => err);
  }, [measures.length]);

  // const handlePageChange = (e) => {
  //   if(e.target.name === 'prev'){
  //     setCurrentPage(currentPage - 1)
  //   }
  // }
  const list = measures
    .slice((currentPage * maxItemsPerPages) - maxItemsPerPages, currentPage * maxItemsPerPages)
    .map((measure) => (
      <div key={measure.attributes.title}>
        <AddMeasure
          header="Add Measurement"
          unit={measure.attributes.unit}
          type={measure.attributes.title}
        />
        <div className={style.btnGroup}>
          <button
            className={style.btnNext}
            type="button"
            name="previous"
            onClick={() => (
              currentPage <= 1
                ? currentPage
                : setCurrentPage(currentPage - 1))}
          >
            Prev
          </button>
          {' '}
          <button
            className={style.btnNext}
            type="button"
            name="Next"
            onClick={() => (
              currentPage < measures.length
                ? setCurrentPage(currentPage + 1)
                : currentPage)}
          >
            Next
          </button>

        </div>
        <Footer />
      </div>

    ));

  return (
    <>{list}</>
  );
};
const ConnectedComponent = connect()(Measures);

export default ConnectedComponent;
