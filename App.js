import React from 'react';
import { Provider } from 'react-redux';
import DataUsageItem from './components/DataUsageItem';
import MobileDataUsageItem from './components/DataUsageItem';
import MobileDataUsageContainer from './containers/MobileDataUsageContainer';
import createStore from './createStore';

const store = createStore();

export default () => (
  <Provider store={store}>
	<MobileDataUsageContainer />
  </Provider>
);
