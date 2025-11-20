const palindromes = function (string) {
    let originalString = string
    .replaceAll(" ", "")
    .replace(/\W/g, '')
    .split("")
    .map((letters) => letters.toLowerCase())
    .join("")
    .replace(" ", "");
  console.log(originalString);
    let reverseString = string
    .replaceAll(" ", "")
    .replace(/\W/g, '')
    .split("")
    .map((letters) => letters.toLowerCase())
    .reverse()
    .join("")
    .replace(" ", "");
  console.log(reverseString);

    if (originalString == reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
