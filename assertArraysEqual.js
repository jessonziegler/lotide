const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
    console.log("equal")
  } else {
    console.log("not equal")
  }
}
assertArraysEqual([1,4,3],[1,2,3])
module.exports = assertArraysEqual;


