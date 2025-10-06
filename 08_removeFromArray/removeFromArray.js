const removeFromArray = function(array, ...items) {
    return array.filter(arrayNumbers => !items.includes(arrayNumbers))
};

// Do not edit below this line
module.exports = removeFromArray;
