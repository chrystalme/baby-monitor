import React from 'react';
import Nav from './Nav';
// import PropTypes from 'prop-types';
import style from '../style/login.module.css';

const Login = (header = 'Login') => (
  <>
    <Nav name={header} />
    <div className={style.container}>
      <input type="text" name="name" id="" placeholder="Enter your name" />
      <input type="password" name="password" id="" placeholder="Enter your password" />
      <input type="password" name="password_confirm" id="" placeholder="Enter your password again" />
      <input type="submit" value="Login" />
    </div>
  </>
);

// Login.propTypes = {

// };

export default Login;
