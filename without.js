const without = function(source, itemsToRemove){
  const result =[];

  for (let i = 0; i < source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      result.push(source[i])
    }
  }
  console.log(result)

  return result;
}

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;

  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)){
    console.log("equal")
  } else {
    console.log("not equal")
  }
}
const withoutResult1 = without([1, 2, 3], [1])
assertArraysEqual(withoutResult1, [2, 3])


const withoutResult2 = without(["1", "2", "3"], [1, 2, "3"])
assertArraysEqual(withoutResult2,["1", "2"] )
