const sumAll = function(firstNum, secondNum) {
const numbersInRange = [];
//If the first parameter or second parameter are negative, return "ERROR";
if (firstNum < 0 || secondNum < 0) {
    return "ERROR";
}
// if (Number.isInteger(firstNum || secondNum))
    for (let i = firstNum; i <= secondNum; i++){
    numbersInRange.push(i);
    }
    for (let i = firstNum; i >= secondNum; i--){
    numbersInRange.push(i);
    }
const finalSum = numbersInRange.reduce((accumulator, currentValue) => accumulator + currentValue
);
return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
