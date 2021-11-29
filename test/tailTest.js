const assertEqual = require('../assertEqual');
const tail = require('../tail');

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