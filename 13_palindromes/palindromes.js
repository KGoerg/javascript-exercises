const palindromes = function (string) {
    // let originalString = string
    // .split("");
    // // .filter((character) => ["!", ".", ","]);
    let reverseString = string.split("").reverse().join("");

    if (string === reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
