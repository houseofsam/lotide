const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(bestShowsByGenre, showTitle) {
  for (let showGenre in bestShowsByGenre) {
    if (bestShowsByGenre[showGenre]  === showTitle) return showGenre;
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama"); // should fail.
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // should pass.

// Im assuming the other approach would be to get the array of object keys, 
// loop through that array and check if they match with function's 2nd argument. 
// If so, return obj[key].


Object.keys(bestShowsByGenre);
