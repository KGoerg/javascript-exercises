function convertToCelsius(temp) {
  const conversion = (temp - 32) * 5/9;
  return rounded = Math.round(conversion * 10) / 10;
};

function convertToFahrenheit(temp) {
const conversion = (temp * 9/5) + 32;
return rounded = Math.round(conversion * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
