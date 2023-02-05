// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
};
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice((drivers.length-2),(drivers.length))
};
const selectingDrivers =[
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
function createFareMultiplier(fare) { 
    return function(multiplier) {
    return multiplier * fare;
};
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

//what//
const selectDifferentDrivers = function (drivers, drivers2) {
     return drivers2(drivers);
};

