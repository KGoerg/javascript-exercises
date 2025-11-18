const palindromes = function (string) {
    let originalString = string
    .split("")
    .filter((character) => character !== "!" && "." && ",")
    .map((letters) => letters.toLowerCase())
    .join("");
  console.log(originalString);
    let reverseString = string
    .split("")
    .filter((character) => character !== "!" && "." && ",")
    .map((letters) => letters.toLowerCase())
    .reverse()
    .join("");
  console.log(reverseString);

    if (originalString == reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
