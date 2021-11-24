const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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

const flatten = function(arr) {
  const flatArray = [];
  
  for(let i = 0; i < arr.length; i++) {
    if (arr[i][0]) {
      for (let j = 0; j < arr[i].length; j++) {
      flatArray.push(arr[i][j]);
      }
    } else {
    flatArray.push(arr[i]);
    }
  }
  console.log(flatArray);
}


flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6] 
