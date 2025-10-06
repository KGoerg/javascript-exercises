const sumAll = function(firstInt, secondInt) {
const numbersInRange = [];
//If the first parameter or second parameter are negative, return "ERROR";
if (firstInt < 0 || secondInt < 0) {
    return "ERROR";
}

    for (let i = firstInt; i <= secondInt; i++){
    numbersInRange.push(i);
    }
    for (let i = firstInt; i >= secondInt; i--){
    numbersInRange.push(i);
    }
const finalSum = numbersInRange.reduce((accumulator, currentValue) => accumulator + currentValue
);
return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
