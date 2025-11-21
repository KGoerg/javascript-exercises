const fibonacci = function(num) {
  let num1 = 0;
  let num2 = 1;
  let count;
  
  if (num === 0) {
    return num1;
  } else {
    for (i = 0; i < num; i++) {
      count = num1 + num2;
      num1 = num2;
    }
    return count;
  }
};

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
