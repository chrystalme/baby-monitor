import * as actionType from './actionTypes';

const getUser = (user) => ({
  type: actionType.GET_USER,
  payload: user,
});

export default getUser;
