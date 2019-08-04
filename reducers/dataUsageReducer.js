import { LOAD_DATA_USAGE } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_DATA_USAGE:
      return action.payload.result.records || [];
    default:
      return state;
  }
};
