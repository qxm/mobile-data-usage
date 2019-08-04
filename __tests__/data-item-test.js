import React from 'react';
import DataUsageItem from '../components/DataUsageItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<DataUsageItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
