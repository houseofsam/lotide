const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {

  console.log(object1, object2);
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    // technically, if one value is an array & the other isn't, it should return false. so an && is acceptable here too. (eqArrays saves us here). LOL NVM NOPE
    // && can still be used to avoid the nesting.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Nested if statement here. Remember, this is avoidable. REVIEW!
      // if eqArrays returns a falsey value, let this if statement return a falsey value as well.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }  
};

assertObjectsEqual({ a:1 }, {a: [1, 2, 3]}); //fail. why does it pass? (Had to switch to && in line 22)
assertObjectsEqual({a:1, b:2}, {a:1}); //fail
assertObjectsEqual({},{}); // pass
assertObjectsEqual({a:1, b:2}, {a:1, b:2}); //pass
assertObjectsEqual({a: 1, b:[2, 3, 'hey']}, {a: 1, b:[2, 3, 'hey']}); //pass

