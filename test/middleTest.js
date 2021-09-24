const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


const middleValues = middle([1,2,3]);
console.log(assertArraysEqual([2], middleValues));
const middleValues2 = middle([1,2,3,4]);
console.log(assertArraysEqual([2, 3], middleValues2));