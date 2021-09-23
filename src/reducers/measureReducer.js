import * as actionType from '../actions/actionTypes';

const measureReducer = (state = { measures: [] }, action) => {
  switch (action.type) {
    case actionType.GET_MEASURE:
      return { ...state, measures: action.payload };
    default:
      return state;
  }
};

export default measureReducer;
