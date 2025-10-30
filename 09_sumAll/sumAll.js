function sumAll(num1, num2) {
    let arr = [];
    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            arr.push(i);
        } 
    } else if (
        num1 < 0 || 
        num2 < 0 || 
        typeof num1 !== "number" || 
        typeof num2 !== "number" ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2)) {
        return "ERROR";
    } else
        for (let i = num1; i <= num2; i++) {
        arr.push(i);
        }  
    return arr.reduce((sum, currentItem) => sum + currentItem);
    };
    

// Do not edit below this line
module.exports = sumAll;
