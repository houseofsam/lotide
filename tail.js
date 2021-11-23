const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  return Array.isArray(arr) ? arr.slice(1) : ''; //check if argument is array and return new array with [0] removed if so.
};

assertEqual(tail([1, 4, 10]).join(' '), [4, 10].join(' '));
assertEqual(tail(['lighthouse', 'labs', 'east', 'west']).join(' '), ['labs', 'east', 'west'].join(' '));
assertEqual(tail(['test'].join(' ')), [].join(' '));
assertEqual(tail([1].join(' ')), [].join(' '));
assertEqual(tail([]).join(' '),[].join(' '));



// Verify that the tail function is returning a new array and not modifying the original array that is passed in.
const words = ["hey", "its", "me"];
tail(words);
assertEqual(words.length, 3);
// assertEqual(tail(words).join(' '), ["its", "me"].join(' '));




// Method 1 - Looping and comparing each array item. Didn't follow through on this though.
/*
const compareArr = function(arr1, arr2) {
  if ((arr1.length > 0 && arr2.length > 0) && (arr1.length === arr2.length)) {
    for (let i = 0; i < arr1.length; i++){
      assertEqual(arr1[i], arr2[i]);
    }
  }
}

compareArr(["hey", "its", "me"], ["its", "me"]);
*/



//Method 2 (More Simple) - Convert the actual/expected arrays into strings via .join(' ') method.
/*
const arrCompare = function(arr1, arr2) {
  assertEqual(arr1.join(' '), arr2.join(' '));
}

arrCompare(tail(words), ["its", "me"]);
*/