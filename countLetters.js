const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let letterCounter = {};

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (letterCounter[letter]) {
        letterCounter[letter] += 1;
      } else {
        letterCounter[letter] = 1;
      }
    }
  }

  // console.log(letterCounter);
  return letterCounter;
};


countLetters('Hello I\'m a student at LHL');
countLetters("lighthouse in the house");
countLetters('');
// countLetters(43); throws error 

// let newarr = (Object.keys(countLetters('hello')));

// console.log(newarr)

// not sure whether I should count capital and lowercase letters as one. 
// Also not sure if I should include punctuation.
// I can most def use regex here. 

// instead of nested if. guard pattern. 