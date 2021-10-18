import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors } from '../actions/errorActions';
import style from '../style/front.module.css';

const FrontPage = () => (
  <div className={style.container}>
    <div className={style.btnGroup}>
      <Link to="/register" onChange={() => useDispatch(clearErrors())}><button type="submit">Register</button></Link>
      <Link to="/login" onChange={() => useDispatch(clearErrors())}><button type="submit">Login</button></Link>
    </div>
  </div>

);

export default FrontPage;
