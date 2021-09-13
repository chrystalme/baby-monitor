import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import style from '../style/login.module.css';
import Nav from '../components/Nav';
import { login } from '../actions/authActions';
// import axiosInstance from '../helpers/axios';

const LoginUser = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(user);
  console.log(isAuthenticated);

  const data = {
    email,
    password,
  };
  console.log(data);

  // const postLogin = async (data) => {
  //   const response = await axiosInstance.post('/auth/login', data)
  //     .catch((err) => err);
  //   dispatch(login(email, password));
  //   if (response.ok) {
  //     localStorage.setItem('user_token', JSON.stringify(response.data.auth_token));
  //   }
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // postLogin(data);
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/add-measure" />;
  }

  return (
    <>
      <Nav name="Login" />
      <form onSubmit={handleSubmit} />
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div className={style.itemContainer}>
            <input type="email" name="email" value={email} id="email" placeholder="Enter your email" required onChange={handleChange} />
            <input type="password" name="password" value={password} id="password" placeholder="Enter your password" required onChange={handleChange} />
            <input className={style.btn} type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>

  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
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
