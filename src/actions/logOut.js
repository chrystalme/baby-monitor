import { receiveLogout, requestLogout } from '.';

const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem('auth_token');
  dispatch(receiveLogout());
};

export default logoutUser;
