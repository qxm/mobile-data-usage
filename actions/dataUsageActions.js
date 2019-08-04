import { LOAD_DATA_USAGE } from './actionTypes';

export const loadData = () => {
  const req = fetch(`https://data.gov.sg/api/action/datastore_search?resource_id=a807b7ab-6cad-4aa6-87d0-e283a7353a0f`);
  return {
    type: LOAD_DATA_USAGE,
    payload: req.then(response => response.json())
  };
};

