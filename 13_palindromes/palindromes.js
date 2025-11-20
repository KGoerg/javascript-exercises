const palindromes = function (string) {
    let originalString = string
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/\W/g, '')
    .split("")
    .join("")
    
    let reverseString = string
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/\W/g, '')
    .split("")
    .reverse()
    .join("")

    if (originalString == reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
