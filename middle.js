const eqArrays = function(arr1, arr2) {
  // console.log(arr1, arr2)
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }  
};

const getMiddleIdx = function(indexes) {
  return Math.floor(indexes.length / 2);
}

const middle = function(arr) {
  let output = [];

  if (arr.length <= 2) {
    return [];
  } else if (!(arr.length % 2)) {
    output.push(arr[getMiddleIdx(arr) - 1]);
    output.push(arr[getMiddleIdx(arr)]);
  } else {
    output = [arr[getMiddleIdx(arr)]];
  }
  // console.log(output);
  return output;
}


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([10, 20, 30]), [20]);
assertArraysEqual(middle([1, 2, 30, 4, 5]), [30]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);