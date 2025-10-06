const convertToCelsius = function(temp) {
  const celsiusConversion = (temp - 32) * (5 / 9);
  //Round result by taking original output multiplied by 10 and rounding to nearest whole number, then dividing by 10 to get a decimal.
  let rounded = Math.round(celsiusConversion * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  const fahrenheitConversion = (temp * (9/5) + 32);
  let rounded = Math.round(fahrenheitConversion * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
