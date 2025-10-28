function reverseString(string) {
    const splitString = string.split(""); //Gives us array [h, e, l, l, o]
    const reverseChars = splitString.reverse(); //Gives us [o, l, l, e, h]
    const join = reverseChars.join("");
    return join;
}
// Do not edit below this line
module.exports = reverseString;