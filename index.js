// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
    const firstDrivers = drivers.slice(0,2);
    return firstDrivers;
}
returnFirstTwoDrivers(drivers)

function returnLastTwoDrivers(drivers){
    const lastDrivers = drivers.slice(2,4);
    return lastDrivers;
}
returnLastTwoDrivers(drivers)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function fareDoubler(n){
    return n*2;
}

function fareTripler(n){
    return n*3;
}

function selectDifferentDrivers(arrayOfDrivers, selectDriver ) {
    return selectDriver(arrayOfDrivers);

}

selectDifferentDrivers(drivers,returnFirstTwoDrivers)

function createFareMultiplier(fare){
 
        return function createFareMultiplier(){
            const fareQuintupler = 5;
            return fareQuintupler*fare;
        }
           
       
      
}
