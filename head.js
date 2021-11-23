const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(arr) {
  return arr.length > 0 ? arr[0] : undefined;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([5]), 6);
assertEqual(head([]), undefined);