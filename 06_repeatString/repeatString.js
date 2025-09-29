// The below both worked but I wanted to rework it into a for loop instead of the while loop I found online. On the second one, I wanted to continue working with i instead of doing the "while (num > 0)" bit.

// const repeatString = function(string, num) {
//     let repeatedString = "";
//     while (num > 0) {
//         repeatedString += string;
//         num--;
//     }
//     return repeatedString;
// }

// const repeatString = function(string, num) {
//     let repeatedString = "";
//     let i = 0;
//     while (i < num) {
//         repeatedString += string;
//         i++;
//     }
//     return repeatedString;
// }

const repeatString = function(string, num) {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
    if (i < num) 
        repeatedString += string;
    }
    return repeatedString;
}

repeatString('hello', 10)

// Do not edit below this line
module.exports = repeatString;
