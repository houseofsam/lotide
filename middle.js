const getMiddleIdx = function(indexes) {
  return Math.floor(indexes.length / 2);
};

const middle = function(arr) {
  let output = [];

  if (arr.length <= 2) {
    return [];
  } else if (!(arr.length % 2)) {
    output.push(arr[getMiddleIdx(arr) - 1]);
    output.push(arr[getMiddleIdx(arr)]);
  } else {
    output = [arr[getMiddleIdx(arr)]];
  }
  return output;
};


module.exports = middle;