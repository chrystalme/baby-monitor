import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loginError, receiveLogin, requestLogin } from '../actions';
// import loginUser from '../actions/loginUser';
import Login from '../components/Login';

const LoginUser = () => {
  const auth = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const fetchUser = (creds) => {
    const config = {
      mode: 'cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: requestLogin.payload,
    };
    console.log(config);
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
    fetchUser();
  }, []);
  console.log(auth);
  return (
    <Login header="Login" />
  );
};

export default LoginUser;
