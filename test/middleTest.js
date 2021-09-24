// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');


// const middleValues = middle([1,2,3]);
// console.log(assertArraysEqual([2], middleValues));
// const middleValues2 = middle([1,2,3,4]);
// console.log(assertArraysEqual([2, 3], middleValues2));

const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("return [3] for middle array [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    //assert.deepEqual([3], [2, 3]);
  });
});