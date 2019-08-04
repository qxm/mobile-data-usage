
const groupBy = (array, f, sortFunc) => {
    const groups = {};
    array.forEach (function(o) {
       const group = JSON.stringify(f(o));
       groups[group] = groups[group] || [];
       groups[group].push(o);
    });

    return Object.keys(groups).map(function(group) {
        return groups[group].sort(sortFunc);
    });
}

export const groupMobileDataUsage = data => (
    groupBy(data, (item) => (item.quarter.substring(0,4)),(a,b)=>(a.quarter.localeCompare(b.quarter)))
);

