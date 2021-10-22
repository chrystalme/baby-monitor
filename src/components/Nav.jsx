import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/top.module.css';

const Nav = ({ name = 'Track.it' }) => (
  <div className={style.top}>
    <div className={style.topText}>{ name }</div>
  </div>
);

Nav.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Nav;
