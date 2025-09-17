import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMeasurement } from '../actions/measurement';
import style from '../style/login.module.css';
import Nav from '../components/Nav';
import { getUser, loginUser, returningUser } from '../actions/authActions';
import axiosInstance from '../helpers/axios';

const LoginUser = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const errorMessage = useSelector((state) => state.error.msg);
  const dispatch = useDispatch();
  const history = useHistory();

  // run once on mount: if token present, mark returning user
  useEffect(() => {
    const user = localStorage.getItem('user_token');
    if (user) {
      dispatch(returningUser());
    }
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs));
    setInputs({
      email: '',
      password: '',
    });
  };

  const setMeasurements = () => {
    axiosInstance
      .get('/api/v1/measurement')
      .then((response) => {
        const { data } = response;
        dispatch(setMeasurement(data));
      })
      .catch((err) => err);
  };

  useEffect(() => {
    setMeasurements();
  }, []); // run once

  useEffect(() => {
    axiosInstance
      .get('/user_info')
      .then((res) => {
        const { data } = res.data;
        dispatch(getUser(data));
      })
      .catch((err) => err);
  }, [dispatch]);

  // redirect when auth state becomes true
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/measures');
    }
  }, [isAuthenticated, history]);

  return (
    <>
      <Nav name="Login" />
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <span
              style={{ color: 'red' }}
              className="mx-auto pl-28 text-center"
            >
              {errorMessage.message}
            </span>
          )}
          <div className={style.itemContainer}>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              autoComplete="false"
              placeholder="Enter your email"
              required
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              autoComplete="false"
              placeholder="Enter your password"
              required
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <input className={style.btn} type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginUser;
