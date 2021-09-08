import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loginError, receiveLogin, requestLogin } from '../actions';
// import loginUser from '../actions/loginUser';
import Login from '../components/Login';

const LoginUser = () => {
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

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmailInput(e.target.value);
    } else if (e.target.name === 'password') {
      setPasswordInput(e.target.value);
    }
  };
  const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const fetchUser = (creds) => {
    const config = {
      mode: 'cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: requestLogin.payload,
    };
    return (dispatch) => {
      dispatch(requestLogin(creds));
      const response = axios.post('http://localhost:3001/auth/login', config)
        .then((user) => {
          if (!response.ok) {
            dispatch(loginError(user.message));
          }
          localStorage.setItem('auth_token', user.auth_token);

          dispatch(receiveLogin(user));
        }).catch((err) => console.log(err));
    };
  };
  useEffect(() => {
    fetchUser(requestLogin.payload);
  }, []);
  console.log(auth);
  return (
    <Login header="Login" onSubmit={handleSubmit} onChange={handleChange} />
  );
};

export default LoginUser;
