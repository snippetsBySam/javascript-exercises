const ftoc = function(temp) {
  let celcius = (temp - 32) * (5/9);
  return Math.round(celcius * 10) / 10;
}

const ctof = function(temp) {
  let fahrenheit = (temp * (9/5)) + 32;
  return Math.round(fahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
