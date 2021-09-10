import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/front.module.css';

const FrontPage = () => (
  <div className={style.container}>
    <div className={style.btnGroup}>
      <Link to="/register"><button type="submit">Register</button></Link>
      <Link to="/login"><button type="submit">Login</button></Link>
    </div>
  </div>

);

export default FrontPage;
