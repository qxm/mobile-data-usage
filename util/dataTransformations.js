
const groupBy = (array, f) => {
    const groups = {};
    array.forEach (function(o) {
       const group = JSON.stringify(f(o));
       groups[group] = groups[group] || [];
       groups[group].push(o);
    });

    return Object.keys(groups).map(function(group) {
        return groups[group];
    });
};

const insertDeclineImage = data => {
  const result =[];
  result.push(data[0]);
  for(var i = 1, len = data.length; i < len; i++){
    if (parseFloat(data[i].volume_of_mobile_data)<parseFloat(data[i-1].volume_of_mobile_data)) {
	    data[i].decline = true;
	    data[i].url = 'https://data.gov.sg/dataset/mobile-data-usage?view_id=5d8e4e74-f260-4387-8479-bfe7f438a2e5&resource_id=a807b7ab-6cad-4aa6-87d0-e283a7353a0f';
    }
	  
  }
};

export const groupMobileDataUsage = data => {
    data.sort((a,b)=>(a.quarter.localeCompare(b.quarter)));
    insertDeclineImage(data);
    return groupBy(data, (item) => (item.quarter.substring(0,4)));
};

