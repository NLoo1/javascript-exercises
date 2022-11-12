const add = function() {
  // let sum = 0;
  // for(let i = 0; i < arguments.length; i++){
  //   sum += arguments[i];
  // }
  return arguments[0] + arguments[1];
	
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(a) {
  let total = 0;
  for(let i = 0; i < a.length; i++){
    total += a[i];
  }
  return total;
	
};

const multiply = function(a) {
  let total = 1;
  for(let i = 0; i < a.length; i++){
    total *= a[i];
  }
  return total;
};

const power = function() {
	return Math.pow(arguments[0], arguments[1]);
};

const factorial = function() {
  if(arguments[0] < 0) return -1;
  else if (arguments[0] == 0) return 1;
  else return (arguments[0] * factorial(arguments[0]-1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
