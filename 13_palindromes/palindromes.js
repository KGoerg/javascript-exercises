const palindromes = function (string) {
    let originalString = string
    .split("")
    .filter((character) => character !== "!" && "." && ",")
    .map((letters) => letters.toLowerCase())
    .join("");
    let reverseString = string
    .split("")
    .filter((character) => character !== "!" && "." && ",")
    .map((letters) => letters.toLowerCase())
    .reverse()
    .join("");

    if (originalString == reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
