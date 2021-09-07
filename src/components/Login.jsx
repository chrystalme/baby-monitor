import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import style from '../style/login.module.css';
import { requestLogin } from '../actions';

const Login = ({ header }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    requestLogin.payload({
      email: emailInput,
      password: passwordInput,
    });
    setEmailInput('');
    setPasswordInput('');
  };
  return (
    <>
      <Nav name={header} />
      <form onSubmit={handleSubmit} />
      <div className={style.container}>
        <div className={style.itemContainer}>
          <input type="email" name="email" id="" placeholder="Enter your email" onChange={(e) => setEmailInput(e.target.value)} />
          <input type="password" name="password" id="" placeholder="Enter your password" onChange={(e) => setPasswordInput(e.target.value)} />
          <input className={style.btn} type="submit" value="Login" />
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Login;
