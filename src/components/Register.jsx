import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import style from '../style/login.module.css';

const Register = ({ header = 'Register' }) => (
  <>
    <Nav name={header} />
    <div className={style.container}>
      <div className={style.itemContainer}>
        <input type="text" name="name" id="" placeholder="Enter your name" required />
        <input type="email" name="email" id="" placeholder="Enter your email" required />
        <input type="password" name="password" id="" placeholder="Enter your password" required />
        <input type="password" name="password_confirmation" id="" placeholder="Confirm password" required />
        <input className={style.btn} type="submit" value="Register" />

      </div>
    </div>
  </>
);

Register.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Register;
