import {groupMobileDataUsage} from '../util/dataTransformations'

mockData = [ {"volume_of_mobile_data": "7.053642", "quarter": "2013-Q2", "_id": 36}, {"volume_of_mobile_data": "7.970536", "quarter": "2013-Q3", "_id": 37}, {"volume_of_mobile_data": "7.664802", "quarter": "2013-Q4", "_id": 38}, {"volume_of_mobile_data": "7.73018", "quarter": "2014-Q1", "_id": 39}, {"volume_of_mobile_data": "7.907798", "quarter": "2014-Q2", "_id": 40}, {"volume_of_mobile_data": "8.629095", "quarter": "2014-Q3", "_id": 41}, {"volume_of_mobile_data": "9.327967", "quarter": "2014-Q4", "_id": 42}];

expectedData = [ [{"volume_of_mobile_data": "7.053642", "quarter": "2013-Q2", "_id": 36}, {"volume_of_mobile_data": "7.970536", "quarter": "2013-Q3", "_id": 37}, {"volume_of_mobile_data": "7.664802", "quarter": "2013-Q4", "_id": 38,"decline":true,"url":'https://data.gov.sg/dataset/mobile-data-usage?view_id=5d8e4e74-f260-4387-8479-bfe7f438a2e5&resource_id=a807b7ab-6cad-4aa6-87d0-e283a7353a0f'}], [{"volume_of_mobile_data": "7.73018", "quarter": "2014-Q1", "_id": 39}, {"volume_of_mobile_data": "7.907798", "quarter": "2014-Q2", "_id": 40}, {"volume_of_mobile_data": "8.629095", "quarter": "2014-Q3", "_id": 41}, {"volume_of_mobile_data": "9.327967", "quarter": "2014-Q4", "_id": 42}]];

it('group mobile data test', () => {
   expect(groupMobileDataUsage(mockData)).toEqual(expectedData);
});
