import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';
// import * as actionTypes from '../actions/actionTypes';
// import loginUser from '../actions/loginUser';
// import Login from '../components/Login';
import style from '../style/login.module.css';
import Nav from '../components/Nav';
import axiosInstance from '../helpers/axios';
import { requestLogin } from '../actions';

const LoginUser = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const data = {
    email,
    password,
  };

  const config = {
    mode: 'cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data,
  };

  const fetchUser = (config) => (dispatch) => {
    dispatch(requestLogin(data));
    const response = axiosInstance.post('/auth/login', config)
      .catch((e) => e);
    if (response.ok) {
      dispatch();
      console.log(response.data);
      localStorage.setItem('id_token', response.data.id_token);
    } else {
      dispatch();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(config);
  };

  useEffect(() => {
    fetchUser(requestLogin(data));
  }, []);

  return (
    <>
      <Nav name="Login" />
      <form onSubmit={handleSubmit} />
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.itemContainer}>
            <input type="email" name="email" id="email" placeholder="Enter your email" required onChange={handleChange} />
            <input type="password" name="password" id="password" placeholder="Enter your password" required onChange={handleChange} />
            <input className={style.btn} type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = () => ({
  // handleSubmit: (config) => dispatch(handleSubmit(config)),
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// LoginUser.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(LoginUser);

export default ConnectedComponent;
