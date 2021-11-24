const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should report back how many instances of each string were found in the allItems array of strings.
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // (Last step) only count specific items. No need to loop thru obj. If it exists, first condition will return true.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; // if it was already added to the results object abouve increase counter by 1
      } else {
        results[item] = 1; // if it was not added to {results}, create a new key for it & set counter to 1
      }
    }
  }
  console.log(results);
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);