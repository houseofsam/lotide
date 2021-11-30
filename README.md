# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @houseofsam/lotide`

**Require it:**

`const _ = require('@houseofsam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: Asserts if 2 values are equal
* `eqArrays(...)`: Compares 2 arrays and returns true if they a perfect match
* `eqObjects(...)`: Compares 2 objects and returns true if they a perfect match
* `assertArraysEqual(...)`: Verbosely and colourfully asserts if 2 arrays are equal
* `assertObjectEqual(...)`: Verbosely and colourfully asserts if 2 objects are equal
* `head(...)`: Returns the first element of a provided array 
* `tail(...)`: Returns an entire provided array except the first element
* `middle(...)`: Returns the middle element(s) of a provided array
* `flatten(...)`: Flatten a provided nested array into a single-level array
* `countOnly(...)`: Take in a collection of items and return counts for a specific subset of those items
* `countLetters(...)`: Take in a sentence (as a string) and then return a count of each of the letters in that sentence
* `letterPositions(...)`: Given a provided string, function will  return all the indices (zero-based positions) in the string where each character is found
* `findKey(...)`: Takes in an object and a callback. Function will scan the object and return the first key for which the callback returns a truthy value
* `findKeyByValue(...)`: Given an object and a value, function will scan the object and return the first key which contains the given value
* `takeUntil(...)`: Collect & return items from a provided array until the callback provided returns a truthy value
* `without(...)`: Returns a subset of a provided array, removing unwanted elements 
* `map(...)`: Given a provided array, function will return a new array based on the results of a callback function, similar to Array.prototype.map
