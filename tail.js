const tail = function(arr) {
  return Array.isArray(arr) ? arr.slice(1) : ''; //check if argument is array and return new array with [0] removed if so.
};

module.exports = tail;

// Method 1 - Looping and comparing each array item. Didn't follow through on this though... until eqArrays where method 2 did not work. (see prev git commit for initial approach)

//Method 2 (More Simple) - Convert the actual/expected arrays into strings via .join(' ') method.