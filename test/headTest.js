const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([5]), 6);
assertEqual(head([]), undefined);