import * as actionType from '../actions/actionTypes';

const measurementReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.GET_MEASUREMENT:
      return {
        ...state,
        measureId: action.measureId,
        value: action.value,
        title: action.title,
      };
    case actionType.SET_MEASUREMENT:
      return { ...state, measurements: action.payload };
    default:
      return state;
  }
};

export default measurementReducer;
