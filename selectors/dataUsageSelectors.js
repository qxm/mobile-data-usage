import { createSelector } from 'reselect';
import {  groupMobileDataUsage } from '../util/dataTransformations';


const dataSelector = state => state.dataUsage;
const groupDataSelector = createSelector(
  [dataSelector],
  groupMobileDataUsage
);

export const dataUsageSelector = createSelector(
  [groupDataSelector],
  items => items
);



