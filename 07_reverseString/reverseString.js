const reverseString = function(string) {
let outputArray = string.split(""); // should generate [h] [e] [l] [l] [o]
let reversedLettersArray = outputArray.reverse(""); // [should generate [o] [l] [l] [e] [h]
let reversedWord = reversedLettersArray.join(""); //should concatenate olleh.
return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
