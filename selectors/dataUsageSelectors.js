import { createSelector } from 'reselect';

const dataSelector = state => state.dataUsage;
export const dataUsageSelector = createSelector(
  [dataSelector],
  items => items
);



