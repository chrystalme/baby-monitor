import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import style from '../style/login.module.css';

const Login = ({ header = 'Login' }) => (
  <>
    <Nav name={header} />
    <div className={style.container}>
      <div className={style.itemContainer}>
        <input type="email" name="name" id="" placeholder="Enter your name" />
        <input type="password" name="password" id="" placeholder="Enter your password" />
        <input className={style.btn} type="submit" value="Login" />

      </div>
    </div>
  </>
);

Login.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Login;
