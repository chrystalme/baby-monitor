import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import style from '../style/login.module.css';
import Nav from '../components/Nav';
import { loginUser } from '../actions/authActions';

const LoginUser = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs));
    setInputs({
      email: '',
      password: '',
    });
  };

  if (isAuthenticated) {
    return <Redirect to="/measures" />;
  }

  return (
    <>
      <Nav name="Login" />
      <form onSubmit={handleSubmit} />
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.itemContainer}>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <input className={style.btn} type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>

  );
};

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => dispatch(loginUser(e)),
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

// LoginUser.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(LoginUser);

export default ConnectedComponent;
