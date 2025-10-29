function sumAll(num1, num2) {
    let arr = [];
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
        arr.push(i);
        }
    }
    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            arr.push(i);
        }
    }
    return arr.reduce((sum, currentItem) => sum + currentItem);
    };
    

// Do not edit below this line
module.exports = sumAll;
