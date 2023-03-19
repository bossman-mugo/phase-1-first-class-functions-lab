const returnFirstTwoDrivers = function([drivers]){
    drivers = ["Antonia","Nuru"]
    const newArray = drivers.slice(0,2);
    return newArray;
}

const returnLastTwoDrivers = function([drivers]){
    drivers = ["Antonia","Nuru","Amari","Mo"]
    const newArray = drivers.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number){
    return function farePrice(fare){
        let total;
        total = fare * number;


    }

}

const fareDoubler = function(){
    function farePrice(far)

    return createFareMultiplier(farePrice);


}

