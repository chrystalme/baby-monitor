import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../actions/authActions';
import Nav from '../components/Nav';
import style from '../style/login.module.css';

const RegisterUser = () => {
  const errorMessage = useSelector((state) => state.error.msg.message);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {
    name, email, password,
  } = user;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  if (localStorage.getItem('user_token')) {
    return <Redirect to="/measures" />;
  }

  return (
    errorMessage ? <span>{errorMessage}</span> : (
      <>
        <Nav name="Register" />
        <div className={style.container}>
          <form onSubmit={handleSubmit}>
            <div className={style.itemContainer}>
              <input
                type="text"
                value={name}
                name="name"
                id="name"
                autoComplete="false"
                placeholder="Enter your name"
                required
                onChange={((e) => setUser({ ...user, name: e.target.value }))}
              />
              <input
                type="email"
                value={email}
                name="email"
                id="email"
                autoComplete="false"
                placeholder="Enter your email"
                required
                onChange={((e) => setUser({ ...user, email: e.target.value }))}
              />
              <input
                type="password"
                value={password}
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                onChange={((e) => setUser({ ...user, password: e.target.value }))}
              />
              <input className={style.btn} type="submit" value="Register" />
            </div>
          </form>
        </div>
      </>
    )
  );
};

const ConnectedComponent = connect()(RegisterUser);

export default ConnectedComponent;
