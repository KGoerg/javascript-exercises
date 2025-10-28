const repeatString = function(string, num) {
    let repeatedWord = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        repeatedWord += string;
    }
    return repeatedWord; 
}

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;