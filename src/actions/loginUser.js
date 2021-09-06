// import axios from 'axios';

import { loginError, receiveLogin, requestLogin } from '.';

const loginUser = (creds) => {
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`,
  };
  return (dispatch) => {
    dispatch(requestLogin(creds));
    return fetch.get('https://localhost:3001/auth/login', config)
      .then((response) => response.json()
        .then((user) => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          dispatch(loginError(user.message));
          return Promise.reject(user);
        }
        localStorage.setItem('auth_token', user.auth_token);

        dispatch(receiveLogin(user));
      }).catch((err) => console.log(err));
  };
};

export default loginUser;
