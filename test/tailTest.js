const assert = require('chai').assert;
const tail = require('../tail');

describe('#tailTest', () => {
  it('returns [4, 10] for [1, 4, 10]', () => {
    assert.deepEqual(tail([1, 4, 10]), [4, 10]);
  });
  
  it('returns ["labs, "east", "west"] for ["lighthouse", "labs", "east", "west"]', () => {
    assert.deepEqual(tail(["lighthouse", "labs", "east", "west"]), ["labs", "east", "west"]);
  });

  it('returns [] for ["test"]', () => {
    assert.deepEqual(tail(["test"]), []);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('Verify that the tail function is returning a new array and not modifying the original array that is passed in.', () => {
    const words = ["hey", "its", "me"];
    tail(words);
    assert.strictEqual(tail(words).length, 2);
    assert.strictEqual(words.length, 3);
    assert.deepEqual(tail(words), ["its", "me"]);
  });
});