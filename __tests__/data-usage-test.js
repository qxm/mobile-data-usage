import React from 'react';
import MobileDataUsage from '../components/MobileDataUsage';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<MobileDataUsage />).toJSON();
  expect(tree).toMatchSnapshot();
});
