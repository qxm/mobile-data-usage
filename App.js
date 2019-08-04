import React from 'react';
import { Provider } from 'react-redux';
import DataUsageItem from './components/DataUsageItem';
import createStore from './createStore';

const store = createStore();

export default () => (
  <Provider store={store}>
    <DataUsageItem data={[{"volume_of_mobile_data": "1.066517", "quarter": "2009-Q1", "_id": 19},{"volume_of_mobile_data": "2.109516", "quarter": "2009-Q4", "_id": 22}]} />
  </Provider>
);
