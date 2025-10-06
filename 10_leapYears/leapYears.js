const leapYears = function(year) {
//Check if the year is divisible by 4 with no remainder. If so, continue to check for next condition:
//If divisible by 100, it's not a leap year. UNLESS it's ALSO divisibe by 400.

const divisibleByFour = year % 4 === 0;
const divisibleByOneHundred = year % 100 === 0;
const divisibleByFourHundred = year % 400 === 0;

if ((divisibleByFour && divisibleByOneHundred && divisibleByFourHundred) || (divisibleByFour && !divisibleByOneHundred)) {
    return true;
} else {
    return false;
}
};


// Do not edit below this line
module.exports = leapYears;
