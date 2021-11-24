const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Method 2 - Looping and comparing each array item index to each other

const eqArrays = function(arr1, arr2) {
  let perfectMatch = true;

  // verify that inputs are arrays and that they are the same length. If even one element differs from the other, identify it as a false match.
  if ((Array.isArray(arr1) && Array.isArray(arr2)) && (arr1.length === arr2.length)) {
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] !== arr2[i] ? perfectMatch = false : '';
    }
  } else {
    // if the arrays do not match the conditions in the above if statement, identify them as false.
    perfectMatch = false;
  }
  // console.log(perfectMatch);
  return perfectMatch;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
