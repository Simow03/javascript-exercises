const convertToCelsius = function(FahrenheitValue) {
  return parseFloat(((FahrenheitValue - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(CelsiusValue) {
  return parseFloat(((CelsiusValue * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
