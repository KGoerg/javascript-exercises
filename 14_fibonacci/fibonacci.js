const fibonacci = function(num) {
  let num1 = 1;
  let num2 = 1;
  
  for (let i = 2; i < num; i++) {
    let count = num1 + num2;
    num1 = num2;
    num2 = count;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
