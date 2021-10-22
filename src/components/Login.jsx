import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import style from '../style/login.module.css';

const Login = ({ header, onSubmit, onChange }) => (
  <>
    <Nav name={header} />
    <form onSubmit={onSubmit} />
    <div className={style.container}>
      <div className={style.itemContainer}>
        <input type="email" name="email" id="" placeholder="Enter your email" onChange={onChange} />
        <input type="password" name="password" id="" placeholder="Enter your password" onChange={onChange} />
        <input className={style.btn} type="submit" value="Login" />
      </div>
    </div>
  </>
);

Login.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Login;
