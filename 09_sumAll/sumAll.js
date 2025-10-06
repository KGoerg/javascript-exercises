const sumAll = function(firstInt, secondInt) {
const numbersInRange = [];
    // if firstInt || if secondInt < 0 {
    //     return "ERROR"
    // };
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
