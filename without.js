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

const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
  console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }  
};

const without = function(sourceArr, itemsToRemove) {
  let newArr = [...sourceArr];

  for (let i = 0; i < newArr.length; i++) {
    for (let itemToRemove of itemsToRemove) {
      if (newArr[i] === itemToRemove) {
        newArr.splice(i, 1);
      }
    }
  }
  console.log(newArr);
  return newArr;
};

without([1,2,3,4,5,4,1], [2,3,4]); // [1,5,1];
without([1,2,3,4], []); // [1,2,3,4]
without([1,2,3,4], [1,2,3,4]); // []
without([1,2,3,4], [1,'2',3,'4']); // [2,4]
// without([1,2,3,4], 2); //error, must input array. 



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);