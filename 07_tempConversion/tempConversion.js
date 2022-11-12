const ftoc = function() {
  return Math.round(((arguments[0]-32)*5/9) * 10)/10;
};

const ctof = function(a) {
  return Math.round(((arguments[0]*1.8) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
