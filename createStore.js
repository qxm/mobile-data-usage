import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import dataUsageReducer from './reducers/dataUsageReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      dataUsage: dataUsageReducer
    }),

    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);

