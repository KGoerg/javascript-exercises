const sumAll = function(firstNum, secondNum) {
const numbersInRange = [];
//If the first parameter or second parameter are negative, return "ERROR";

// If the first parameter or second parameter are not integers, return "ERROR". First, test if these are integers. If they are integers, continue; if not, return "ERROR"

if (firstNum > 0 && secondNum > 0 && Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
    for (let i = firstNum; i <= secondNum; i++){
    numbersInRange.push(i);
    }
    for (let i = firstNum; i >= secondNum; i--){
    numbersInRange.push(i);
    }
} else {
    return "ERROR";
};    
const finalSum = numbersInRange.reduce((accumulator, currentValue) => accumulator + currentValue
);
return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
