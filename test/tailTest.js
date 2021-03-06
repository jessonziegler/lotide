const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(["5"]), []);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    //assert.deepEqual([3], [2, 3]);
  });
});

/* const tail = require('../tail');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};
assertEqual(tail([1,2,3])[0], 2);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words)[0], "Lighthouse") */
